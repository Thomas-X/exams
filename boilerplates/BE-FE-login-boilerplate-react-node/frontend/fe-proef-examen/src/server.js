import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createProvider as Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import { ServerStyleSheet } from 'styled-components';
import App from './App';
import injectGlobalCss from './config/injectGlobalCss';
import configureStore from './redux/configureStore';
import { initialState as reducerInitialState } from './redux/index.js';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/*', (req, res) => {
        const context = {};
        const sheet = new ServerStyleSheet();
        const initialState = {
            ...reducerInitialState,
        };
        injectGlobalCss();
        const { store } = configureStore(initialState);
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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Proefexamen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css
                    ? `<link rel="stylesheet" href="${assets.client.css}">`
                    : ''}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
        <link rel="stylesheet" href="assets/css/Login-Form-Clean.css">
        <link rel="stylesheet" href="assets/css/Registration-Form-with-Photo.css">
        <link rel="stylesheet" href="assets/css/styles.css">
        ${styles}
        <script src="${assets.client.js}" defer></script>
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
        window.__INITIAL_STATE__ = ${serialize(finalState)}
</script>
    </body>
</html>`,
            );
        }
    });

export default server;
