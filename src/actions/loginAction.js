import axios from 'axios';
export const loginAction = (user, pass) => {//keyword, category_ids, page
  return dispatch => {
    axios.post('http://localhost:3002/login/', { uid: user, pwd: pass })
      .then(res => {
        dispatch(login(res.data))
      })
      .catch(err => console.log(err))
  }
}
const login = obj => ({
  type: 'LOGIN',
  obj
})