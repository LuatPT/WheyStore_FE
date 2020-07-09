import { connect } from 'react-redux';
import * as DeletePost from '../../actions/post/deletePostAction';
import { bindActionCreators } from 'redux';
import PostElement from '../../components/admin_post/PostElement';


const mapDispatchToProp = (dispatch) => ({
  DeletePost: bindActionCreators(DeletePost, dispatch),
});
export default connect(null, mapDispatchToProp)(PostElement);
