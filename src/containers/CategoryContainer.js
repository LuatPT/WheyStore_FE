import { connect } from 'react-redux';
import CategoryItem from '../components/CategoryItem';
import * as CartActionToCate from '../actions/getCartAction';
import * as getProductbyCategory from '../actions/getProductbyCate';
import * as Logout from '../actions/logoutAction';
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
