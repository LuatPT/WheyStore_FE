import axios from 'axios';
export const getCartAction = (obj) => {//keyword, category_ids, page
  console.log(obj)
  return dispatch => {
    axios.get("http://localhost:3002/carts/" + obj.userId)
      .then(res => {
        dispatch(getCart(res.data))
      })
      .catch(err => console.log(err))
  }
}
const getCart = listCart => ({
  type: 'GET_CART',
  listCart
})