import axios from 'axios';
import * as constants from '../../constants/index';
export const loginAction = (user, pass) => {
  //keyword, category_ids, page
  return (dispatch) => {
    axios({
      method: 'post',
      url: constants.api + '/login',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: { uid: user, pwd: pass },
    })
      .then((res) => {
        if (!res.data.message) {
          alert('Đăng nhập thất bại');
        } else {
          localStorage.setItem('token', res.data.jwt);
          localStorage.setItem('userId', res.data.userId);
          localStorage.setItem('role', res.data.role);
          dispatch(login(res.data));
          alert('Đăng nhập thành công');
        }
      })
      .catch((err) => alert('Đăng nhập thất bại'));
  };
};
const login = (obj) => ({
  type: 'LOGIN',
  obj,
});
