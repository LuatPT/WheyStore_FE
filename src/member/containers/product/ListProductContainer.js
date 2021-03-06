import { connect } from 'react-redux';
import * as ListProductActions from '../../actions/product/getProductsAction';
import { bindActionCreators } from 'redux';
import ListProducts from '../../components/product/ListProducts';

const mapStateToProps = (state) => ({
  listProduct: state.listProductReducer.list,
  listProByCate: state.productReducer,
  total: state.listProductReducer.total,
  keyWord: state.searchReducer,
});
const mapDispatchToProp = (dispatch) => ({
  ListProductActions: bindActionCreators(ListProductActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(ListProducts);
