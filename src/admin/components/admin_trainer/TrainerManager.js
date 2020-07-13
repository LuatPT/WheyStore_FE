import React from 'react';
import TrainerElementContainer from '../../container/trainer/TrainerElementContainer';
import AddTrainerAdm from '../../container/trainer/AddTrainerAdm';

class TrainerManager extends React.Component {
  componentDidMount = () => {
    this.props.GetListTrainer.getAllTrainerAction();
  }
  render() {
    const { listTrainer } = this.props;
    console.log(listTrainer);
    return (
      <div className="trainerManager row">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Trainer ID </th>
              <th>Trainer Name</th>
              <th>Experience</th>
              <th>Trainer Avatar</th>
              <th>Trainer Quote</th>
              <th>Trainer Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listTrainer.map((ele, key) =>
              < TrainerElementContainer {...ele} key={ele.trainer_id} />
            )}
            <AddTrainerAdm />
          </tbody>
        </table>
      </div>
    );
  }
}
export default TrainerManager