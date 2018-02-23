import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { initialState as reducerInitialState } from './redux';
import serialize from 'serialize-javascript';
import App from './App';
import { ServerStyleSheet } from 'styled-components';
import injectGlobalCss from './config/injectGlobalCss';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

let assets: any;

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express();

server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
    .get('/*', (req: express.Request, res: express.Response) => {
            const context: any = {};
            const sheet = new ServerStyleSheet();
            const initialState = {
                ...reducerInitialState,
            };
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
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Examen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
        <link rel="stylesheet" href="assets/css/Login-Form-Clean.css">
        <link rel="stylesheet" href="assets/css/Registration-Form-with-Photo.css">
        <link rel="stylesheet" href="assets/css/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        ${styles}
          ${
                        process.env.NODE_ENV === 'production'
                            ? `<script src="${assets.client.js}" defer></script>`
                            : `<script src="${assets.client.js}" defer crossorigin></script>`
                        }
    </head>
    <body>
   
        <div id="root">${markup}</div>
        <script>
        window.__INITIAL_STATE__ = ${serialize(finalState)}
</script>
    </body>
</html>`
                );
            }
        }
    );

export default server;
