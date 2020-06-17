import { connect } from 'react-redux';
import * as CartAction from '../actions/getCartAction';
import * as CartUpdate from '../actions/updateCartAction';
import { bindActionCreators } from 'redux';
import Cart from '../components/Cart';
const mapStateToProps = (state) => ({
  userId: localStorage.getItem('userId'),
  listCart: state.getListCart,
});
const mapDispatchToProp = (dispatch) => ({
  CartAction: bindActionCreators(CartAction, dispatch),
  CartUpdate: bindActionCreators(CartUpdate, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(Cart);
