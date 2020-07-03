import axios from 'axios';
import * as constants from '../../constants/index';
export const addProductAction = (obj) => {
  return (dispatch) => {
    axios
      .post(constants.api + '/products', obj,
    )
      .then((res) => {
        dispatch(addProduct(res.data));
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };
};
const addProduct = (message) => ({
  type: 'ADD_PRODUCT',
  message,
});
