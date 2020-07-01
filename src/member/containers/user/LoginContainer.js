import { connect } from 'react-redux';
import LoginRegister from '../../components/user/LoginRegister';
import * as LoginAction from '../../actions/user/loginAction';
import * as register from '../../actions/user/registerAction';
import { bindActionCreators } from 'redux';

const mapDispatchToProp = (dispatch) => ({
  LoginAction: bindActionCreators(LoginAction, dispatch),
  register: bindActionCreators(register, dispatch)
});
export default connect(null, mapDispatchToProp)(LoginRegister);
