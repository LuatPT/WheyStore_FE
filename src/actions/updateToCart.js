import axios from 'axios';
import * as constants from '../constants/index';
export const updateToCart = (obj) => {
  //keyword, category_ids, page
  return (dispatch) => {
    console.log(obj);
    axios
      .put(constants.api + '/carts/' + obj.cart_id, obj, {
        headers: { 'access-token': localStorage.getItem('token') },
      })
      // axios
      //   .put('http://localhost:3002/carts/' + obj.cart_id, obj)
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
