import { connect } from 'react-redux';
import DetailProduct from '../components/DetailProduct';
import * as DetailAction1 from '../actions/addToCart';
import * as DetailAction2 from '../actions/checkExistProduct';
import * as DetailAction3 from '../actions/updateToCart';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => {
  // console.log(state.checkExist);
  return {
    userId: localStorage.getItem('userId'),
    cart: state.checkExist,
  };
};
const mapDispatchToProp = (dispatch) => ({
  DetailAction1: bindActionCreators(DetailAction1, dispatch),
  DetailAction2: bindActionCreators(DetailAction2, dispatch),
  DetailAction3: bindActionCreators(DetailAction3, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(DetailProduct);
