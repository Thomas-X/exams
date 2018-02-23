import axios from 'axios';

const USER_LOAD = 'USER_LOAD';
const USER_SUCCESS = 'USER_SUCCESS';
const USER_FAIL = 'USER_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';

export const defaultState = {
    isLoggedIn: false,
    token: '',
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case USER_LOAD:
            return {
                ...state,
                isLoggedIn: false,
                token: '',
            };
        case USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
            };
        case USER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                token: '',
                error: action.payload,
            };
        case USER_LOGOUT:
            return defaultState
        default:
            return state;
    }
}

export const baseFunc = url => values => dispatch => {
    dispatch({
        type: USER_LOAD,
    });
    return axios.post(url, values)
        .then(({ data }) => {
            dispatch({
                type: USER_SUCCESS,
                payload: data,
            });
        })
        .catch(err => {
            dispatch({
                type: USER_FAIL,
                payload: err,
            });
        });
};

export const onLogout = () => ({
    type: USER_LOGOUT,
});

export const onLogin = baseFunc('http://localhost:3004/auth/login');
export const onRegister = baseFunc('http://localhost:3004/auth/register');