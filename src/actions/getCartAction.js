import axios from 'axios';
export const getCartAction = (obj) => {
  //keyword, category_ids, page
  return (dispatch) => {
    axios({
      method: 'get',
      url: 'http://localhost:3002/cart/' + obj.userId,
      headers: {
        'access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      // axios
      //   .get('http://localhost:3002/cart/' + obj.userId)
      .then((res) => {
        console.log(res);
        dispatch(getCart(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getCart = (listCart) => ({
  type: 'GET_CART',
  listCart,
});
