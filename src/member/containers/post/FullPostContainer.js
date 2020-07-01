import { connect } from 'react-redux';
import * as getPostById from '../../actions/post/getDetailPost';
import { bindActionCreators } from 'redux';
import FullPost from '../../components/post/FullPost';

const mapStateToProps = (state) => ({
  post: state.detailPost
});
const mapDispatchToProp = (dispatch) => ({
  getPostById: bindActionCreators(getPostById, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(FullPost);
