import * as actionTypes from '../store/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  isSignUp: false,
  authRedirectPath: '/'
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
    default: 
      return state;
  }
}

export default reducer