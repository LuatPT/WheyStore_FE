import axios from 'axios';
import * as constants from '../constants/index';
import * as add from './addToCart';
import * as update from './updateToCart';
export const checkExistProduct = (obj) => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: constants.api + '/cartss/' + obj.product_id,
      headers: {
        'access-token': localStorage.getItem('token'),
      },
    })
      .then((res) => {
        dispatch(checkExist(res.data));
        if (!res.data) {
          add.addToCart(obj);
        } else {
          let objUpdate = {
            cart_id: res.data.cart_id,
            user_id: res.data.user_id,
            product_id: obj.product_id,
            soluong: Number(obj.soluong) + res.data.soluong,
          };
          update.updateToCart(objUpdate);
        }
      })
      .catch((err) => console.log(err));
  };
};
const checkExist = (cart) => ({
  type: 'CHECK_EXIST',
  cart,
});
