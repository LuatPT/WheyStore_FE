import { connect } from 'react-redux';
import * as UpdateProduct from '../../actions/product/updateProductAction';
import * as ShowUpdateProduct from '../../../member/actions/product/getDetailProduct';
import { bindActionCreators } from 'redux';
import UpdateProductForm from '../../components/admin_product/UpdateProductForm';
const mapStateToProps = (state) => ({
  product: state.detailProduct
});
const mapDispatchToProp = (dispatch) => ({
  UpdateProduct: bindActionCreators(UpdateProduct, dispatch),
  ShowUpdateProduct: bindActionCreators(ShowUpdateProduct, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(UpdateProductForm);
