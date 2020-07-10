import React from 'react';
import TrainerElement from './TrainerElement';
class ListTrainer extends React.Component {
  componentDidMount = () => {
    const { GetAllTrainer } = this.props;
    GetAllTrainer.getAllTrainerAction();
  }
  render() {
    const { listAllTrainer } = this.props;
    return (
      <div className="listTrainer row">
        {
          listAllTrainer.map((ele, key) => (
            <TrainerElement key={key} {...ele} />
          ))
        }
      </div>
    );
  }
}
export default ListTrainer