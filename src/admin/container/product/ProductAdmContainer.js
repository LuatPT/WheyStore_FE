import { connect } from 'react-redux';
import * as GetProduct from '../../../member/actions/product/getProductsAction';
import { bindActionCreators } from 'redux';
import ProductManager from '../../components/admin_product/ProductManager';

const mapStateToProps = (state) => ({
  listProduct: state.listProductReducer.list,
  listProByCate: state.productReducer,
  total: state.listProductReducer.total,
});
const mapDispatchToProp = (dispatch) => ({
  GetProduct: bindActionCreators(GetProduct, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(ProductManager);
