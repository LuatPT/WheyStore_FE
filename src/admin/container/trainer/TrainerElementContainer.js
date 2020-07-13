import { connect } from 'react-redux';
import * as DeleteTrainer from '../../actions/trainer/deleteTrainerAction';
import { bindActionCreators } from 'redux';
import TrainerElement from '../../components/admin_trainer/TrainerElement';

const mapDispatchToProp = (dispatch) => ({
  DeleteTrainer: bindActionCreators(DeleteTrainer, dispatch),
});
export default connect(null, mapDispatchToProp)(TrainerElement);

