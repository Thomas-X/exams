import { schema } from 'normalizr';
import { configureApiData } from 'react-api-data';

export default (store) => {
    const myEndpointSchema = new schema.Entity('MyEndpoint');

    /*
    *   There should always be an ID in the request, negotiate with backend for
    *   responses that don't have an ID, just pass an hardcoded ID like 1 for login data, etc.
    * */
    const endpointConfig = {
        myEndpoint: {
            url: 'http://www.mocky.io/v2/5a7d752b3100005000cd08c7',
            method: 'GET',
            responseSchema: myEndpointSchema,
        },
    };
    store.dispatch(configureApiData({
        setRequestProperties: (defaultProperties, state) => {
            // Add the auth token here after logging in.
            return ({
                ...defaultProperties,
            });
        },
    }, endpointConfig));
}