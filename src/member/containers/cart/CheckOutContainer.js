import { connect } from 'react-redux';
import * as sendMailActions from '../../actions/common/sendMailAction';
import * as checkVoucherActions from '../../actions/common/checkVoucherAction';

import CheckOut from '../../components/cart/CheckOut';
import * as CartAction from '../../actions/cart/getCartAction';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => ({
  listCartToCheckOut: state.getListCart,
  resultCheckVoucher: state.checkVoucher
});
const mapDispatchToProp = (dispatch) => ({
  sendMailActions: bindActionCreators(sendMailActions, dispatch),
  checkVoucherActions: bindActionCreators(checkVoucherActions, dispatch),
  CartAction: bindActionCreators(CartAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(CheckOut);
