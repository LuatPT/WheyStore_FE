import axios from 'axios';
import * as constants from '../constants/index';
export const getAllPostAction = () => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: constants.api + '/allposts/',
    })
      .then((res) => {
        dispatch(getAllPost(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getAllPost = (listAllPost) => ({
  type: 'GET_ALL_POST',
  listAllPost,
});
