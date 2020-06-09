import { connect } from 'react-redux';
import CategoryItem from '../components/CategoryItem';
import * as CartActionToCate from '../actions/getCartAction';
import * as Logout from '../actions/logoutAction';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  listCate: state.listCateReducer,
  isDisplayCart: state.loginReducer.message,
  userId: state.loginReducer,
});
const mapDispatchToProp = (dispatch) => ({
  CartActionToCate: bindActionCreators(CartActionToCate, dispatch),
  Logout: bindActionCreators(Logout, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(CategoryItem);
