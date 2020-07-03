import { connect } from 'react-redux';
import * as UpdateProduct from '../../actions/product/updateProductAction';
import * as DeleteProduct from '../../actions/product/deleteProductAction';
import { bindActionCreators } from 'redux';
import ProductElement from '../../components/admin_product/ProductElement';


const mapDispatchToProp = (dispatch) => ({
  UpdateProduct: bindActionCreators(UpdateProduct, dispatch),
  DeleteProduct: bindActionCreators(DeleteProduct, dispatch),
});
export default connect(null, mapDispatchToProp)(ProductElement);
