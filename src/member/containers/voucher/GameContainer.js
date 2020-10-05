import { connect } from 'react-redux';
import * as getAllVoucher from '../../actions/voucher/getAllVoucherAction';
import { bindActionCreators } from 'redux';
import Game from '../../components/game/Game';

const mapStateToProps = (state) => ({
  listVoucher: state.listVoucher,
});
const mapDispatchToProp = (dispatch) => ({
  getAllVoucher: bindActionCreators(getAllVoucher, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(Game);
