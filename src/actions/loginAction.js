import axios from 'axios';
export const loginAction = (user, pass) => {
  //keyword, category_ids, page
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:3002/login/',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: { uid: user, pwd: pass },
    })
      .then((res) => {
        if (!res.data.message) {
        } else {
          localStorage.setItem('token', res.data.jwt);
          console.log(localStorage.getItem('token'));
          dispatch(login(res.data));
        }
      })
      .catch((err) => console.log(err));
  };
};
const login = (obj) => ({
  type: 'LOGIN',
  obj,
});
