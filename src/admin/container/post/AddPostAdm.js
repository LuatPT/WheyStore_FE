import { connect } from 'react-redux';
import * as AddPost from '../../actions/post/addPostAction';
import { bindActionCreators } from 'redux';
import AddPostForm from '../../components/admin_post/AddPostForm';


const mapDispatchToProp = (dispatch) => ({
  AddPost: bindActionCreators(AddPost, dispatch),
});
export default connect(null, mapDispatchToProp)(AddPostForm);
