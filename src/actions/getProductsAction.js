import axios from 'axios';
export const getProductsAction = () => {//keyword, category_ids, page
  return dispatch => {
    axios.get('http://localhost:3002/products/')
      .then(res => {
        dispatch(getList(res.data))
      })
      .catch(err => console.log(err))
  }
}
const getList = listProduct => ({
  type: 'GET_PRODUCT',
  listProduct
})