import { connect } from 'react-redux';
import * as sendMailActions from '../actions/sendMailAction';
import CheckOut from '../components/CheckOut';
import * as CartAction from '../actions/getCartAction';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => ({
  listCartToCheckOut: state.getListCart,
});
const mapDispatchToProp = (dispatch) => ({
  sendMailActions: bindActionCreators(sendMailActions, dispatch),
  CartAction: bindActionCreators(CartAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(CheckOut);
