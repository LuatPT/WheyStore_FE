import axios from 'axios';
export const updateToCart = (obj) => {
  //keyword, category_ids, page
  return (dispatch) => {
    axios({
      method: 'put',
      url: 'http://localhost:3002/carts/' + obj.cart_id,
      obj,
      headers: {
        'access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      // axios
      //   .put('http://localhost:3002/carts/' + obj.cart_id, obj)
      .then((res) => {
        dispatch(updateCart(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const updateCart = (message) => ({
  type: 'UPDATE_CARD',
  message,
});
