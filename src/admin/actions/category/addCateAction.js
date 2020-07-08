import axios from 'axios';
import * as constants from '../../constants/index';
export const addCateAction = (obj) => {
  return (dispatch) => {
    axios
      .post(constants.api + '/categorys', obj)
      .then((res) => {
        dispatch(addCate(res.data));
        alert("Category have been added!")
      })
      .catch((err) => console.log(err));
  };
};
const addCate = (message) => ({
  type: 'ADD_CATE',
  message,
});
