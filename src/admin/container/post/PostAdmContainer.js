import { connect } from 'react-redux';
import * as getAllPostAdm from '../../../member/actions/post/getAllPostAction';
import { bindActionCreators } from 'redux';
import PostManager from '../../components/admin_post/PostManager';
const mapStateToProps = (state) => ({
  listPostAdm: state.getListPost,
});
const mapDispatchToProp = (dispatch) => ({
  getAllPostAdm: bindActionCreators(getAllPostAdm, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProp)(PostManager);
