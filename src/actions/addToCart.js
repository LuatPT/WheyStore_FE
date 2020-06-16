import axios from 'axios';
import * as constants from '../constants/index';
export const addToCart = (cartItem) => {
  return (dispatch) => {
    axios
      .post(constants.api + '/carts', cartItem, {
        headers: { 'access-token': localStorage.getItem('token') },
      })
      .then((res) => {
        dispatch(addCart(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const addCart = (message) => ({
  type: 'ADD_CART',
  message,
});
