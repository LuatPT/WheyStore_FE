import { combineReducers } from "redux";
import cateReducer from './cateReducer'
import productReducer from './productReducer'
import listCateReducer from './listCateReducer'
import listProductReducer from './listProductReducer'
import loginReducer from './loginReducer'
import addCartReducer from './addCartReducer'
import getListCart from './getListCart'
export default combineReducers({
  cateReducer,
  productReducer,
  listCateReducer,
  listProductReducer,
  loginReducer,
  addCartReducer,
  getListCart
})