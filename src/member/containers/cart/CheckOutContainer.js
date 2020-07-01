import { connect } from 'react-redux';
import * as sendMailActions from '../../actions/common/sendMailAction';
import CheckOut from '../../components/cart/CheckOut';
import * as CartAction from '../../actions/cart/getCartAction';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => ({
  listCartToCheckOut: state.getListCart,
});
const mapDispatchToProp = (dispatch) => ({
  sendMailActions: bindActionCreators(sendMailActions, dispatch),
  CartAction: bindActionCreators(CartAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(CheckOut);
