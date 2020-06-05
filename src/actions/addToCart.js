import axios from 'axios';
export const addToCart = (cartItem) => {//keyword, category_ids, page
  return dispatch => {
    axios.post('http://localhost:3002/carts/', cartItem)
      .then(res => {
        dispatch(addCart(res.data))
      })
      .catch(err => console.log(err))
  }
}
const addCart = message => ({
  type: 'ADD_CART',
  message
})