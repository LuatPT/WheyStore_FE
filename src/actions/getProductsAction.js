import axios from 'axios';
import * as constants from '../constants/index';
export const getProductsAction = () => {
  //keyword, category_ids, page
  return (dispatch) => {
    axios
      .get(constants.api + '/products')
      .then((res) => {
        dispatch(getList(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getList = (listProduct) => ({
  type: 'GET_PRODUCT',
  listProduct,
});