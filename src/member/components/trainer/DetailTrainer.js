import React from 'react';
class DetailTrainer extends React.Component {
  componentDidMount = () => {
    const { DetailTrainerAc } = this.props;
    DetailTrainerAc.getDetailTrainer(this.props.trainer_id)
  };
  render() {
    const { trainer } = this.props;
    console.log(trainer);
    return (
      <div className="trainerElementDetail ">
        <div className="card img-fluid">
          <img className="card-img-top" src={trainer.trainer_avatar} alt="Card image" />
          <div className="card-img-overlay">
            <h4 className="card-title titleTrainer">{trainer.trainer_name}</h4>
          </div>
          <p className="card-text textTrainer">{trainer.experience} years experience</p>
          <p className="card-text textTrainer">"{trainer.trainer_quote}"</p>
          <p className="card-text textTrainer" >{trainer.trainer_cost}</p>
        </div>
      </div>
    );
  }
}
export default DetailTrainer