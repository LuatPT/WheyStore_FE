import { connect } from 'react-redux';
import LoginRegister from '../components/LoginRegister';
import * as LoginAction from '../actions/loginAction';
import * as register from '../actions/registerAction';
import { bindActionCreators } from 'redux';

const mapDispatchToProp = (dispatch) => ({
  LoginAction: bindActionCreators(LoginAction, dispatch),
  register: bindActionCreators(register, dispatch)
});
export default connect(null, mapDispatchToProp)(LoginRegister);
