import axios from 'axios';
import * as constants from '../../constants/index';
export const getDetailPost = (obj) => {
  return (dispatch) => {
    axios
      .get(constants.api + '/posts/' + obj.post_id)
      .then((res) => {
        dispatch(detailPost(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const detailPost = (post) => ({
  type: 'DETAIL_POST',
  post,
});
