import axios from 'axios';
import * as constants from '../constants/index';
export const deleteToCart = (cart_id) => {
  return (dispatch) => {
    axios
      .delete(constants.api + '/carts/' + cart_id, {
        headers: { 'access-token': localStorage.getItem('token') },
      })
      .then((res) => {
        dispatch(deleteCart(res.data));
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };
};
const deleteCart = (message) => ({
  type: 'DELETE_CARD',
  message,
});
