import axios from 'axios';
import * as constants from '../../constants/index';
export const deleteCateAction = (category_id) => {
  return (dispatch) => {
    axios
      .delete(constants.api + '/categorys/' + category_id)
      .then((res) => {
        dispatch(deleteCate(res.data));
        alert("Category have been deleted!")
      })
      .catch((err) => console.log(err));
  };
};
const deleteCate = (message) => ({
  type: 'DELETE_CATE',
  message,
});
