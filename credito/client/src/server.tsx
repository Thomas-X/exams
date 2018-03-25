/* tslint:disable */
import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { initialState as reducerInitialState } from './redux';
import serialize from 'serialize-javascript';
import App from './App';
import { ServerStyleSheet } from 'styled-components';
import injectGlobalCss from './config/injectGlobalCss';
import configureStore, { reduxPersistRootKey } from './redux/configureStore';
import { Provider } from 'react-redux';
//@ts-ignore
import cookieParser from 'cookie-parser';
//@ts-ignore
import Cookies from 'cookies';
import { omit } from 'lodash';
import { CookieStorage, NodeCookiesWrapper } from 'redux-persist-cookie-storage';

let assets: any;

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express();

// Stolen from redux-persist since node doesn't support import statements yet..
const getStoredState = (config: any): Promise<Object | void> => {
    const transforms = config.transforms || [];
    const storageKey = `${
        config.keyPrefix !== undefined ? config.keyPrefix : 'persist:'
        }${config.key}`;
    const storage = config.storage;
    const debug = config.debug;
    const deserialize = config.serialize === false ? (x: any) => x : defaultDeserialize;
    return storage.getItem(storageKey).then((serialized: any) => {
        if (!serialized) {
            return undefined;
        } else {
            try {
                let state = {};
                let rawState = deserialize(serialized);
                Object.keys(rawState).forEach(key => {
                    state[key] = transforms.reduceRight((subState: any, transformer: any) => {
                        return transformer.out(subState, key, rawState);
                    }, deserialize(rawState[key]));
                });
                return state;
            } catch (err) {
                if (process.env.NODE_ENV !== 'production' && debug) {
                    console.log(
                        `redux-persist/getStoredState: Error restoring data ${serialized}`,
                        err,
                    );
                }
                throw err;
            }
        }
    });
};

function defaultDeserialize(serial: any) {
    return JSON.parse(serial);
}

server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
    .use(cookieParser())
    .get('/*', async (req: express.Request, res: express.Response) => {
            const context: any = {...reducerInitialState};
            const sheet = new ServerStyleSheet();

            const cookieJar = new NodeCookiesWrapper(new Cookies(req, res));

            const persistConfig = {
                key: `${reduxPersistRootKey}`,
                storage: new CookieStorage(cookieJar/*, options */),
            };

            let initialState;
            try {
                const storedState = await getStoredState(persistConfig);
                initialState = omit(storedState as any, ['_persist']);
            }
            catch (e) {
                initialState = context;
            }

            injectGlobalCss();
            const {store} = configureStore(initialState);

            const app = (
                <Provider store={store}>
                    <StaticRouter context={context} location={req.url}>
                        <App/>
                    </StaticRouter>
                </Provider>
            );
            const markup = renderToString(
                sheet.collectStyles(app),
            );
            const styles = sheet.getStyleTags();
            const finalState = store.getState();

            if (context.url) {
                res.redirect(context.url);
            } else {
                res.status(200).send(
                    `<!doctype html>
    <html lang="en">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Examen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" type="text/css" >
        <link rel="stylesheet" href="assets/css/Login-Form-Clean.css" type="text/css" >
        <link rel="stylesheet" href="assets/css/Registration-Form-with-Photo.css" type="text/css" >
        <link rel="stylesheet" href="assets/css/styles.css" type="text/css" >
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" >
        ${styles}
          
    </head>
    <body>
                    ${
                        process.env.NODE_ENV === 'production'
                            ? `<script src="${assets.client.js}" defer></script>`
                            : `<script src="${assets.client.js}" defer crossorigin></script>`
                        }
                    <div id="root">${markup}</div>
        <script>
        window.__INITIAL_STATE__ = ${serialize(finalState)}
</script>
    </body>
</html>`,
                );
            }

        },
    );

export default server;
