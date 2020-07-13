import axios from 'axios';
import * as constants from '../../constants/index';
export const showDetailProduct = (product_id) => {
  return (dispatch) => {
    axios
      .get(constants.api + '/products/' + product_id)
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
