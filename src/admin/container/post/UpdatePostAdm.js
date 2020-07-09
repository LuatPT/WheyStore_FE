import { connect } from 'react-redux';
import * as UpdatePost from '../../actions/post/updatePostAction';
import * as ShowUpdatePost from '../../../member/actions/post/getDetailPost';
import { bindActionCreators } from 'redux';
import UpdatePostForm from '../../components/admin_post/UpdatePostForm';
const mapStateToProps = (state) => ({
  post: state.detailPost
});
const mapDispatchToProp = (dispatch) => ({
  UpdatePost: bindActionCreators(UpdatePost, dispatch),
  ShowUpdatePost: bindActionCreators(ShowUpdatePost, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(UpdatePostForm);