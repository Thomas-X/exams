import { schema } from 'normalizr';
import { configureApiData } from 'react-api-data';
import { isServer } from '../services/Helpers';

export default (store) => {
    const getHomePageSchema = new schema.Entity('getHomePage');

    /*
    *   There should always be an ID in the request, negotiate with backend for
    *   responses that don't have an ID, just pass an hardcoded ID like 1 for login data, etc.
    * */
    const endpointConfig = {
        getHomePage: {
            url: 'http://www.mocky.io/v2/5a8aab482f00004c00e470ad',
            method: 'GET',
            responseSchema: getHomePageSchema,
        },
    };

    // Monkey patch for fetch
    if(!isServer()) {
        const fetchSaved = fetch;
        fetch = function() {
            arguments[1].headers.authenticationToken = store.getState().user.token;
            return fetchSaved.apply(this, arguments);
        };
    }

    store.dispatch(configureApiData({
        setHeaders: (defaultProperties, state) => {
            console.log(store.getState());
            // Add the auth token here after logging in.
            return ({
                ...defaultProperties,
            });
        },
    }, endpointConfig));
}