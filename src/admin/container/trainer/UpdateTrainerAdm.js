import { connect } from 'react-redux';
import * as UpdateTrainer from '../../actions/trainer/updateTrainerAction';
import * as ShowUpdateTrainer from '../../../member/actions/trainer/getDetailTrainer';
import { bindActionCreators } from 'redux';
import UpdateTrainerForm from '../../components/admin_trainer/UpdateTrainerForm';
const mapStateToProps = (state) => ({
  trainer: state.detailTrainer
});
const mapDispatchToProp = (dispatch) => ({
  UpdateTrainer: bindActionCreators(UpdateTrainer, dispatch),
  ShowUpdateTrainer: bindActionCreators(ShowUpdateTrainer, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(UpdateTrainerForm);
