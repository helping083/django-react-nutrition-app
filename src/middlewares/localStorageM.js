import * as actiontypes from '../store/actionTypes';
const localStorageMiddleware = store => next=> action => {
  let { AUTH_START, AUTH_SUCCESS } = actiontypes;
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
  return next(action);
}

export default localStorageMiddleware;