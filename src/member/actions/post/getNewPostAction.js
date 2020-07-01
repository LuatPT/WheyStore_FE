import axios from 'axios';
import * as constants from '../../constants/index';
export const getNewPostAction = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: constants.api + '/posts/',
    })
      .then((res) => {
        dispatch(getNewPost(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getNewPost = (listNewPost) => ({
  type: 'GET_NEW_POST',
  listNewPost,
});
