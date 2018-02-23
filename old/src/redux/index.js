import { reducer as reactApiDataReducer } from 'react-api-data';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user, { defaultState as userInitialState } from './user';

export default combineReducers({
    apiData: reactApiDataReducer,
    form: formReducer,
    user,
});

export const initialState = {
    user: {
        ...userInitialState,
    },
};