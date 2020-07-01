import axios from 'axios';
import * as constants from '../../constants/index';
export const getCategorysAction = () => {
  //keyword, category_ids, page
  return (dispatch) => {
    axios
      .get(constants.api + '/categorys')
      .then((res) => {
        dispatch(getCategory(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getCategory = (listCategory) => ({
  type: 'GET_CATEGORY',
  listCategory,
});
