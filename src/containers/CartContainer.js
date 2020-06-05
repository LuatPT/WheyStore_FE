import { connect } from "react-redux"
import * as CartAction from '../actions/getCartAction'
import { bindActionCreators } from "redux"
import Cart from "../components/Cart"
const mapStateToProps = state => ({
  userId: state.loginReducer.userId,
  listCart: state.getListCart
})
const mapDispatchToProp = dispatch => ({
  CartAction: bindActionCreators(CartAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProp)(Cart)