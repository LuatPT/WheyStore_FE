import { combineReducers } from 'redux';
import cateReducer from './category/cateReducer';
import productReducer from './product/productReducer';
import listCateReducer from './category/listCateReducer';
import listProductReducer from './product/listProductReducer';
import loginReducer from './user/loginReducer';
import addCartReducer from './cart/addCartReducer';
import getListCart from './cart/getListCart';
import searchReducer from './product/searchReducer';
import checkExist from './cart/checkExist';
import detailProduct from './product/detailProduct';
import getRateByProduct from './rate/getRateByProduct';
import getListPost from './post/getListPost';
import detailPost from './post/detailPost';
import getAvgRate from './rate/getAvgRate';
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
