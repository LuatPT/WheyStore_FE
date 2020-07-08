import axios from 'axios';
import * as constants from '../../constants/index';
export const updateUserAction = (obj) => {
  return (dispatch) => {
    axios
      .put(constants.api + '/users/' + obj.user_id, obj)
      .then((res) => {
        dispatch(updateUser(res.data));
        alert("User have been updated!")
      })
      .catch((err) => console.log(err));
  };
};
const updateUser = (message) => ({
  type: 'UPDATE_USER',
  message,
});
