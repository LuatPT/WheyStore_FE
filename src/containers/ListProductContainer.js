import { connect } from 'react-redux';
import * as ListProductActions from '../actions/getProductsAction';
import { bindActionCreators } from 'redux';
import ListProducts from '../components/ListProducts';

const mapStateToProps = (state) => ({
  listProduct: state.listProductReducer.list,
  total: state.listProductReducer.total,
  keyWord: state.searchReducer,
});
const mapDispatchToProp = (dispatch) => ({
  ListProductActions: bindActionCreators(ListProductActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(ListProducts);
