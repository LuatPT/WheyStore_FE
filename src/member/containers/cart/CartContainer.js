import { connect } from 'react-redux';
import * as CartAction from '../../actions/cart/getCartAction';
import * as CartUpdate from '../../actions/cart/updateCartAction';
import * as CartDelete from '../../actions/cart/deleteToCart';
import { bindActionCreators } from 'redux';
import Cart from '../../components/cart/Cart';

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
