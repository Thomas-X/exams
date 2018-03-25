import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

const {store} = configureStore((window as any).__INITIAL_STATE__);

const AppRoot = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

// Only show app after persisting state.

persistStore(store, {}, () => {
    ReactDOM.hydrate(
        AppRoot,
        document.getElementById('root'),
    );
});

if (module.hot) {
    module.hot.accept();
}
