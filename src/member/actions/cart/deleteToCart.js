import axios from 'axios';
import * as constants from '../../constants/index';

export const deleteToCart = (cart_id) => {
  return (dispatch, getState) => {
    axios
      .delete(constants.api + '/carts/' + cart_id, {
        headers: { 'access-token': localStorage.getItem('token') },
      })
      .then((res) => {
        const { getListCart } = getState();
        const indexWantRemove = getListCart.findIndex(item => item.cart_id === cart_id);
        getListCart.splice(indexWantRemove,1);
        dispatch(getCart( [...getListCart]));
      })
      .catch((err) => console.log(err));
  };
};
const deleteCart = (message) => ({
  type: 'DELETE_CARD',
  message,
});

const getCart = (listCart) => ({
  type: 'GET_CART',
  listCart,
});