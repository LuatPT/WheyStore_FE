import axios from 'axios';
import * as constants from '../../constants/index';
export const deleteProductAction = (obj) => {
  return (dispatch) => {
    axios
      .delete(constants.api + '/products/' + obj.product_id, obj.product_id,
    )
      .then((res) => {
        dispatch(deleteProduct(res.data));
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };
};
const deleteProduct = (message) => ({
  type: 'DELETE_PRODUCT',
  message,
});
