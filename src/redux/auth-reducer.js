import { usersAPI } from './../api/api';

const SET_AUTH_USER = 'SET_AUTH_USER';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: 
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUser = (id, email, login) => ({type: SET_AUTH_USER, data: {id, email, login}})

export const getAuthUser = () => {
    return (dispatch) => {
        usersAPI.authUser()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUser(id, email, login));
                }
            });
    }
}

export default authReducer;