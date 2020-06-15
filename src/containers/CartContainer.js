import { connect } from 'react-redux';
import * as CartAction from '../actions/getCartAction';
import * as CartActionUpdate from '../actions/updateToCart';
import { bindActionCreators } from 'redux';
import Cart from '../components/Cart';
const mapStateToProps = (state) => ({
  userId: localStorage.getItem('userId'),
  listCart: state.getListCart,
});
const mapDispatchToProp = (dispatch) => ({
  CartAction: bindActionCreators(CartAction, dispatch),
  CartActionUpdate: bindActionCreators(CartActionUpdate, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(Cart);
