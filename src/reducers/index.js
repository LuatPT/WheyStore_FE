import { combineReducers } from 'redux';
import cateReducer from './cateReducer';
import productReducer from './productReducer';
import listCateReducer from './listCateReducer';
import listProductReducer from './listProductReducer';
import loginReducer from './loginReducer';
import addCartReducer from './addCartReducer';
import getListCart from './getListCart';
import searchReducer from './searchReducer';
import checkExist from './checkExist';
import detailProduct from './detailProduct';
import getRateByProduct from './getRateByProduct';
import getListPost from './getListPost';
import detailPost from './detailPost';
import getAvgRate from './getAvgRate';
export default combineReducers({
  cateReducer,
  productReducer,
  listCateReducer,
  listProductReducer,
  loginReducer,
  addCartReducer,
  getListCart,
  searchReducer,
  checkExist,
  detailProduct,
  getRateByProduct,
  getListPost,
  detailPost,
  getAvgRate
});
