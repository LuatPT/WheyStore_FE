import axios from 'axios';
import * as constants from '../../constants/index';
export const updateToCart = (obj) => {
  axios
    .put(constants.api + '/carts/' + obj.cart_id, obj, {
      headers: { 'access-token': localStorage.getItem('token') },
    })
    .catch((err) => console.log(err));
};
