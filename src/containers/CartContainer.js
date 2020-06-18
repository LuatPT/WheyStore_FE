import { connect } from 'react-redux';
import * as CartAction from '../actions/getCartAction';
import * as CartUpdate from '../actions/updateCartAction';
import * as CartDelete from '../actions/deleteToCart';
import { bindActionCreators } from 'redux';
import Cart from '../components/Cart';
const mapStateToProps = (state) => ({
  userId: localStorage.getItem('userId'),
  listCart: state.getListCart,
});
const mapDispatchToProp = (dispatch) => ({
  CartAction: bindActionCreators(CartAction, dispatch),
  CartUpdate: bindActionCreators(CartUpdate, dispatch),
  CartDelete: bindActionCreators(CartDelete, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(Cart);
