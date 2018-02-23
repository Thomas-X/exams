import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import styled from 'styled-components';
import { Provider } from 'react-redux';

const {store, persistor} = configureStore((window as any).__INITIAL_STATE__);

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const Loading = () => {
    return (
        <Container>
            <h2>Loading..</h2>
        </Container>
    );
};

ReactDOM.hydrate(
    <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistor}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
