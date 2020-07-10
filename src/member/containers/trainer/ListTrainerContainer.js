import { connect } from 'react-redux';
import * as GetAllTrainer from '../../actions/trainer/getAllTrainerAction';
import { bindActionCreators } from 'redux';
import ListTrainer from '../../components/trainer/ListTrainer';
const mapStateToProps = (state) => ({
  listAllTrainer: state.getListTrainer,
});
const mapDispatchToProp = (dispatch) => ({
  GetAllTrainer: bindActionCreators(GetAllTrainer, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProp)(ListTrainer);
