import React from 'react';
class DetailTrainer extends React.Component {
  componentDidMount = () => {
    const { DetailTrainerAc } = this.props;
    DetailTrainerAc.getDetailTrainer(this.props.trainer_id)
  };
  render() {
    const { trainer } = this.props;
    return (
      <div className="trainerElementDetail ">
        <div className="card img-fluid">
          <img className="card-img-top" src={trainer.trainer_avatar} alt="Card image" />
          <p>
            {trainer.trainer_name}
          </p>
          <p className="card-text textTrainer">{trainer.experience} years experience</p>
          <p className="card-text textTrainer">"{trainer.trainer_quote}"</p>
          <p className="card-text textTrainer" >{trainer.trainer_cost}</p>
        </div>
      </div>
    );
  }
}
export default DetailTrainer