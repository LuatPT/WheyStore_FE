import axios from 'axios';
import * as constants from '../../constants/index';
export const addToCart = (cartItem) => {
  axios.post(constants.api + '/carts', cartItem, {
    headers: { 'access-token': localStorage.getItem('token') },
  });
};
