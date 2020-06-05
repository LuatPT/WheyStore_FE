import axios from 'axios';
export const getCategorysAction = () => {//keyword, category_ids, page
  return dispatch => {
    axios.get("http://localhost:3002/categorys")
      .then(res => {
        dispatch(getCategory(res.data))
      })
      .catch(err => console.log(err))
  }
}
const getCategory = listCategory => ({
  type: 'GET_CATEGORY',
  listCategory
})