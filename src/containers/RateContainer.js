import { connect } from 'react-redux';
import * as getRate from '../actions/getRateByProduct';
import { bindActionCreators } from 'redux';
import Rate from '../components/Rate';
import * as addRate from '../actions/addRateAction';
const mapStateToProps = (state) => ({
  listRate: state.getRateByProduct
});
const mapDispatchToProp = (dispatch) => ({
  getRate: bindActionCreators(getRate, dispatch),
  addRate: bindActionCreators(addRate, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProp)(Rate);
