import * as actionTypes from '../store/actionTypes';
import axios from 'axios';

export const setOrdersHistory = (orders_history) =>{
  return {
    type: actionTypes.SET_HISTORY_ORDERS,
    orders_history
  }
}
export const getOrdersHistory = (userID) => {
  return dispatch => {
    const headers = {"Content-Type": "application/json"};
    axios({
      method: 'GET',
      url: `/orders/usersList/${userID}`
    })
      .then((item) => {
        console.log('item history', item);
        dispatch(setOrdersHistory(item.data.orders_history));
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
export const getNutritions = () => {
  return dispatch => {
    axios({
      method: 'GET',
      url: 'nutritions/'
    })
     .then((item) => {
      console.log(item)
     })
     .catch((error) => {
      console.log(error);
     })
  }
}