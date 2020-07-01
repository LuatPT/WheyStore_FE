import { connect } from 'react-redux';
import * as getRate from '../../actions/rate/getRateByProduct';
import { bindActionCreators } from 'redux';
import Rate from '../../components/rate/Rate';
import * as addRate from '../../actions/rate/addRateAction';
const mapStateToProps = (state) => ({
  listRate: state.getRateByProduct
});
const mapDispatchToProp = (dispatch) => ({
  getRate: bindActionCreators(getRate, dispatch),
  addRate: bindActionCreators(addRate, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProp)(Rate);
