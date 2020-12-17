import axios from 'axios';
import * as constants from '../../constants/index';
export const updateCartAction = (obj) => {
  return (dispatch, getState) => {
    axios
      .put(constants.api + '/carts/' + obj.cart_id, obj, {
        headers: { 'access-token': localStorage.getItem('token') },
      })
      .then((res) => {
        const { getListCart } = getState();
        console.log(getListCart);
        let listCartUpdated = getListCart.map((ele) => ele.cart_id === obj.cart_id ? {...ele, soluong: obj.soluong, tong: (ele.tong / ele.soluong)*obj.soluong} : ele );
        dispatch(getCart([...listCartUpdated]));
      })
      .catch((err) => console.log(err));
  };
};
const updateCart = (message) => ({
  type: 'UPDATE_CARD',
  message,
});

const getCart = (listCart) => ({
  type: 'GET_CART',
  listCart,
});