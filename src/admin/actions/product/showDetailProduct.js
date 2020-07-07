import axios from 'axios';
import * as constants from '../../constants/index';
export const showDetailProduct = (obj) => {
  return (dispatch) => {
    axios
      .get(constants.api + '/products/' + obj.product_id)
      .then((res) => {
        dispatch(showDetailPro(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const showDetailPro = (product) => ({
  type: 'SHOW_DETAIL_PRODUCT',
  product,
});
