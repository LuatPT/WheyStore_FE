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
      // axios
      //   .post('http://localhost:3002/login/', { uid: user, pwd: pass })
      .then((res) => {
        dispatch(login(res.data));
      })
      .then((data) => {
        if (data.message) {
        } else {
          localStorage.setItem('token', data.jwt);
        }
      })
      .catch((err) => console.log(err));
  };
};
const login = (obj) => ({
  type: 'LOGIN',
  obj,
});
