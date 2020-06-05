import { connect } from "react-redux"
import DetailProduct from "../components/DetailProduct"
import * as DetailAction from '../actions/addToCart'
import { bindActionCreators } from "redux"
const mapStateToProps = state => ({
  userId: state.loginReducer.userId
})
const mapDispatchToProp = dispatch => ({
  DetailAction: bindActionCreators(DetailAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProp)(DetailProduct)