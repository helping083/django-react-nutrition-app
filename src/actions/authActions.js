import * as actionTypes from '../store/actionTypes';
import axios from 'axios';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
  loading: true
}) 

export const authLogOut = () => ({
  type: actionTypes.AUTH_LOGOUT,
  isSignUp: false
}) 

export const authSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    loading: false,
    data: data
  }
}
export const authLogIn = () => {
  return {
    type: actionTypes.AUTH_LOG_IN,
    isSignUp: true
  }
}
export const authFail = (errorData) => {
  return {
    type: actionTypes.AUTH_FAIL,
    loading: false,
    error: errorData
  }
}
export const auth = (authData) =>{
  return dispatch => {
    const headers = {"Content-Type": "application/json"};
    dispatch(authStart())
    axios({
      method:'POST',
      url:'nutritions/login/',
      headers: headers,
      data: authData
    })
      .then((item)=>{
        console.log(item);
        return item.data 
      })
      .then((data)=>{
       dispatch(authLogIn())
       return dispatch(authSuccess(data))
      })
      .catch((err)=>{
        dispatch(authFail(err))
        console.log('err auth', err);
      })
  }
}

