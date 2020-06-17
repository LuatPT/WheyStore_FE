import axios from 'axios';
import * as constants from '../constants/index';
export const getCartAction = (obj) => {
  //keyword, category_ids, page
  return (dispatch) => {
    axios({
      method: 'get',
      url: constants.api + '/cart/' + obj.userId,
      headers: {
        'access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        dispatch(getCart(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getCart = (listCart) => ({
  type: 'GET_CART',
  listCart,
});
