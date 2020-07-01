import { connect } from 'react-redux';
import * as getNewPostAc from '../../actions/post/getNewPostAction';
import { bindActionCreators } from 'redux';
import ListNewPost from '../../components/post/ListNewPost';
const mapStateToProps = (state) => ({
  listPost: state.getListPost,
});
const mapDispatchToProp = (dispatch) => ({
  getNewPostAc: bindActionCreators(getNewPostAc, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProp)(ListNewPost);

