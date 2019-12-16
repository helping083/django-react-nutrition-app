import * as actionTypes from '../store/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  isSignUp: false,
  authRedirectPath: '/',
  todos: []
};

const reducer = ( state = initialState, action ) => {
  
  switch ( action.type ) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: action.loading
      }
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: action.loading
      }
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        isSignUp: action.isSignUp
      }
    case actionTypes.AUTH_LOG_IN:
      return {
        ...state,
        isSignUp: action.isSignUp
      }
    case actionTypes.SET_USER_ID:
      return {
        ...state,
        userId: action.userId
      }
    default: 
      return state;
  }
}

export default reducer