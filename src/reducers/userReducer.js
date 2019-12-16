import * as actionTypes from '../store/actionTypes';

const initialState = {
  email: null,
  username: null,
  orders_history: null
}

const userReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actionTypes.SET_HISTORY_ORDERS:
      return {
        ...state,
        orders_history: action.orders_history
      }
    default:
      return state
  }
}

export default userReducer;