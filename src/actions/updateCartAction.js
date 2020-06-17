import axios from 'axios';
import * as constants from '../constants/index';
export const updateCartAction = (obj) => {
  return (dispatch) => {
    axios
      .put(constants.api + '/carts/' + obj.cart_id, obj, {
        headers: { 'access-token': localStorage.getItem('token') },
      })
      .then((res) => {
        dispatch(updateCart(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const updateCart = (message) => ({
  type: 'UPDATE_CARD',
  message,
});
