import { createStore, compose, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/';
import localMiddleware from '../middlewares/localStorageM';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer,composeEnhancers(
  applyMiddleware(thunk, localMiddleware)
));

export default store;