import { connect } from "react-redux"
import LoginRegister from "../components/LoginRegister"
import * as LoginAction from '../actions/loginAction'
import { bindActionCreators } from "redux"

const mapStateToProps = state => ({
  isDisplayCart: state.loginReducer.message
})
const mapDispatchToProp = dispatch => ({
  LoginAction: bindActionCreators(LoginAction, dispatch)
})
export default connect(null, mapDispatchToProp)(LoginRegister)