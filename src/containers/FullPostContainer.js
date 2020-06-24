import { connect } from 'react-redux';
import * as getPostById from '../actions/getDetailPost';
import { bindActionCreators } from 'redux';
import FullPost from '../components/FullPost';

const mapStateToProps = (state) => ({
  post: state.detailPost
});
const mapDispatchToProp = (dispatch) => ({
  getPostById: bindActionCreators(getPostById, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(FullPost);
