import axios from 'axios';
import * as constants from '../../constants/index';
export const getDetailProduct = (product_id) => {
  return (dispatch) => {
    axios
      .get(constants.api + '/products/' + product_id)
      .then((res) => {
        dispatch(detailProduct(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const detailProduct = (product) => ({
  type: 'DETAIL_PRODUCT',
  product,
});
