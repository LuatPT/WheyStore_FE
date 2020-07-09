import axios from 'axios';
import * as constants from '../../constants/index';
export const updatePostAction = (obj) => {
  return (dispatch) => {
    axios
      .put(constants.api + '/posts/' + obj.post_id, obj)
      .then((res) => {
        dispatch(updatePost(res.data));
        alert("Post have been updated!")
      })
      .catch((err) => console.log(err));
  };
};
const updatePost = (message) => ({
  type: 'UPDATE_POST',
  message,
});
