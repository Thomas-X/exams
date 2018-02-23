import { configureApiData } from 'react-api-data';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import configureApi from '../config/configureApi';
import { isServer } from '../services/Helpers';
import rootReducer from './index.js';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


const configureStore = initialState => {

    const persistConfig = {
        key: 'root-persist-bla',
        storage,
        blacklist: ['apiData', 'form']
    };
    const allReducers = !isServer()
        ? persistReducer(persistConfig, rootReducer )
        : rootReducer

    const store = createStore(
        allReducers,
        initialState,
        compose(
            applyMiddleware(
                thunk,
            ),
            !isServer() && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
        ),
    );

    let persistor = persistStore(store)

    configureApi(store);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./index', () => {
            const nextRootReducer = require('./index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return { store, persistor } ;
};

export default configureStore;