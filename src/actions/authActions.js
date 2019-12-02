import * as actionTypes from '../store/actionTypes';
import axios from 'axios';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
  loading: true
}) 
