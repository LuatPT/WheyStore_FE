import axios from 'axios';
import * as constants from '../../constants/index';
export const getProductsAction = (obj) => {
  return (dispatch) => {
    axios
      .get(constants.api + '/products/' + obj.page + '/' + obj.per_page)
      .then((res) => {
        dispatch(getList(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getList = (productObj) => ({
  type: 'GET_PRODUCT',
  productObj,
});
