import { connect } from 'react-redux';
import * as AddTrainer from '../../actions/trainer/addTrainerAction';
import { bindActionCreators } from 'redux';
import AddTrainerForm from '../../components/admin_trainer/AddTrainerForm';


const mapDispatchToProp = (dispatch) => ({
  AddTrainer: bindActionCreators(AddTrainer, dispatch),
});
export default connect(null, mapDispatchToProp)(AddTrainerForm);
