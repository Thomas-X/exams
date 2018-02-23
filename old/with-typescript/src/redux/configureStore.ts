import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { isServer } from '../services/Helpers';
import rootReducer, { ReduxState } from './index';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
    key: 'root-persist-examen',
    storage,
    blacklist: ['form']
};

const configureStore = (initialState: ReduxState) => {
    const allReducers = !isServer()
        ? persistReducer(persistConfig, rootReducer as any)
        : rootReducer;

    const store = createStore(
        allReducers as any,
        initialState,
        compose(
            applyMiddleware(
                thunk,
            ),
            !isServer() && (window as any).__REDUX_DEVTOOLS_EXTENSION__
                ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
                : (f: any): any => f,
        ),
    );

    const persistor = persistStore(store);

    // configureApi(store);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./index', () => {
            const nextRootReducer = require('./index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return {store, persistor};
};

export default configureStore;