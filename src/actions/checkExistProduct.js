import axios from 'axios';
import * as constants from '../constants/index';
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
      })
      .catch((err) => console.log(err));
  };
};
const checkExist = (cart) => ({
  type: 'CHECK_EXIST',
  cart,
});
