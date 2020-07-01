import { connect } from "react-redux"
import Product from "../../components/product/Product"
import * as getAvg from '../../actions/rate/getAvgRate';
import { bindActionCreators } from "redux";

const mapStateToProps = state =>
  ({
    listProduct: state.listProductReducer,
    avgRate: state.getAvgRate
  })

const mapDispatchToProp = dispatch => ({
  getAvg: bindActionCreators(getAvg, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProp)(Product)