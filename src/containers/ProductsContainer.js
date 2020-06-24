import { connect } from "react-redux"
import Product from "../components/Product"
import * as getAvg from '../actions/getAvgRate';
import { bindActionCreators } from "redux";

const mapStateToProps = state => ({
  listProduct: state.listProductReducer,
  avg: state.getAvgRate
})
const mapDispatchToProp = dispatch => ({
  getAvg: bindActionCreators(getAvg, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProp)(Product)