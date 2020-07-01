import { connect } from 'react-redux';
import CategoryItem from '../../components/category/CategoryItem';
import * as CartActionToCate from '../../actions/cart/getCartAction';
import * as getProductbyCategory from '../../actions/product/getProductbyCate';
import * as Logout from '../../actions/user/logoutAction';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  listCate: state.listCateReducer,
  isDisplayCart: state.loginReducer.message,
  userId: localStorage.getItem('userId'),
  role: localStorage.getItem('role'),
});
const mapDispatchToProp = (dispatch) => ({
  CartActionToCate: bindActionCreators(CartActionToCate, dispatch),
  getProductbyCategory: bindActionCreators(getProductbyCategory, dispatch),
  Logout: bindActionCreators(Logout, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(CategoryItem);
