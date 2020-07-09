import axios from 'axios';
import * as constants from '../../constants/index';
export const deletePostAction = (post_id) => {
  return (dispatch) => {
    axios
      .delete(constants.api + '/posts/' + post_id)
      .then((res) => {
        dispatch(deletePost(res.data));
        alert("Post have been deleted!")
      })
      .catch((err) => console.log(err));
  };
};
const deletePost = (message) => ({
  type: 'DELETE_POST',
  message,
});
