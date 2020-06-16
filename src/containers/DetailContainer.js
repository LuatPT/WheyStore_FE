import { connect } from 'react-redux';
import DetailProduct from '../components/DetailProduct';
import * as DetailAction from '../actions/checkExistProduct';
import * as add from '../actions/addToCart';
import * as update from '../actions/updateToCart';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => {
  // console.log(state.checkExist);
  return {
    userId: localStorage.getItem('userId'),
    cart: state.checkExist,
  };
};
const mapDispatchToProp = (dispatch) => ({
  DetailAction: bindActionCreators(DetailAction, dispatch),
  add: bindActionCreators(add, dispatch),
  update: bindActionCreators(update, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(DetailProduct);
