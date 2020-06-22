import { connect } from 'react-redux';
import * as getRate from '../actions/getRateByProduct';
import { bindActionCreators } from 'redux';
import Rate from '../components/Rate';
const mapStateToProps = (state) => ({
  listRate: state.getRateByProduct
});
const mapDispatchToProp = (dispatch) => ({
  getRate: bindActionCreators(getRate, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProp)(Rate);
