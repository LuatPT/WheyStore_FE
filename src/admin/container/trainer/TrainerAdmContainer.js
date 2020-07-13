import { connect } from 'react-redux';
import * as GetListTrainer from '../../../member/actions/trainer/getAllTrainerAction';
import { bindActionCreators } from 'redux';
import TrainerManager from '../../components/admin_trainer/TrainerManager';

const mapStateToProps = (state) => ({
  listTrainer: state.getListTrainer
});
const mapDispatchToProp = (dispatch) => ({
  GetListTrainer: bindActionCreators(GetListTrainer, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(TrainerManager);

