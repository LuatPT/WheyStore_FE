import axios from 'axios';
import * as constants from '../../constants/index';
export const deleteUserAction = (user_id) => {
  return (dispatch) => {
    axios
      .delete(constants.api + '/users/' + user_id)
      .then((res) => {
        dispatch(deleteUser(res.data));
        alert("User have been deleted!")
      })
      .catch((err) => console.log(err));
  };
};
const deleteUser = (message) => ({
  type: 'DELETE_USER',
  message,
});
