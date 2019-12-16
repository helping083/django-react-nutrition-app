import * as actiontypes from '../store/actionTypes';
import { setUserID } from '../actions/';
const localStorageMiddleware = store => next=> action => {
  let { AUTH_SUCCESS, AUTH_LOGOUT } = actiontypes;

  if (action.type === AUTH_SUCCESS) {
    console.log('hello', action);
    let locS = localStorage.getItem('token');
    if (!locS) {
      let setToken = async () =>{
       await localStorage.setItem('token', action.data.token)
      };
      setToken()
        .then((item)=>{console.log(localStorage.getItem('token'))})
        .catch((err)=>{console.log(err)});
    }
  }

  if (action.type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    store.dispatch(setUserID(null));
  }
  return next(action);
}

export default localStorageMiddleware;