import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from '../components/utils/setAuthToken';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from './types';

//Load User
export const loadUser = () => async dispatch =>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/user');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

//Register User
export const register = ({ name, email, password }) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post('/api/register',body,config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (error) {
        console.log(error)
        const errors = error.response;
        if(errors){
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}

//Register Login
export const login = ({ email, password }) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password});

    try {
        const res = await axios.post('/api/login',body,config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (error) {
        const errors = error.response;
        if(errors){
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        });
    }
}

//Logout //Clear Profile
export const logout = () => dispatch =>{
    dispatch({type:LOGOUT});
    
}