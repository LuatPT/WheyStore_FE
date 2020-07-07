import { connect } from 'react-redux';
import * as GetListUser from '../../actions/user/getListUserAction';
import { bindActionCreators } from 'redux';
import UserManager from '../../components/admin_user/UserManager';

const mapStateToProps = (state) => ({
  listUser: state.getListUser
});
const mapDispatchToProp = (dispatch) => ({
  GetListUser: bindActionCreators(GetListUser, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(UserManager);
