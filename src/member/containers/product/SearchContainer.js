import { connect } from 'react-redux';
import * as SearchActions from '../../actions/product/searchAction';
import { bindActionCreators } from 'redux';
import Search from '../../components/product/Search';

const mapStateToProps = (state) => ({
  keySearch: state.searchReducer,
});
const mapDispatchToProp = (dispatch) => ({
  SearchActions: bindActionCreators(SearchActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(Search);
