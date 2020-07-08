import axios from 'axios';
import * as constants from '../../constants/index';
export const updateCateAction = (obj) => {
  return (dispatch) => {
    axios
      .put(constants.api + '/categorys/' + obj.category_id, obj)
      .then((res) => {
        dispatch(updateCate(res.data));
        alert("Category have been updated!")
      })
      .catch((err) => console.log(err));
  };
};
const updateCate = (message) => ({
  type: 'UPDATE_CATE',
  message,
});
