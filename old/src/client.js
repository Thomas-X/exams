import React from 'react';
import { render } from 'react-dom';
import Provider from 'react-redux/es/components/Provider';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { PersistGate } from 'redux-persist/es/integration/react'
import styled from 'styled-components';
import App from './App';
import configureStore from './redux/configureStore';

const { store, persistor } = configureStore(window.__INITIAL_STATE__);

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const Loading = (props) => {
    return (
        <Container>
            <h2>Loading..</h2>
        </Container>
    );
};

render(
    <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistor}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept();
}
