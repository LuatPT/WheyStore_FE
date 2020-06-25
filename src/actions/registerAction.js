import axios from 'axios';
import * as constants from '../constants/index';
export const registerAction = (user, pass) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: constants.api + '/register',
      data: { userName: user, passWord: pass },
    })
      .then((res) => {
        if (!res.data) {
        } else {
          dispatch(register(res.data));
          alert(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
};
const register = (message) => ({
  type: 'REGISTER',
  message,
});
