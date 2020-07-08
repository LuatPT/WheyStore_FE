import { connect } from 'react-redux';
import * as UpdateUser from '../../actions/user/updateUserAction';
import * as DeleteUser from '../../actions/user/deleteUserAction';
import { bindActionCreators } from 'redux';
import UserElement from '../../components/admin_user/UserElement';


const mapDispatchToProp = (dispatch) => ({
  UpdateUser: bindActionCreators(UpdateUser, dispatch),
  DeleteUser: bindActionCreators(DeleteUser, dispatch),
});
export default connect(null, mapDispatchToProp)(UserElement);
