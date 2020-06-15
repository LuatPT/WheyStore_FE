import { connect } from 'react-redux';
import * as sendMailActions from '../actions/sendMailAction';
import CheckOut from '../components/CheckOut';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => ({
  listCartToCheckOut: state.getListCart,
});
const mapDispatchToProp = (dispatch) => ({
  sendMailActions: bindActionCreators(sendMailActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(CheckOut);
