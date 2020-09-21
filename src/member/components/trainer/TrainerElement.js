import React from 'react';
class TrainerElement extends React.Component {
  render() {
    const ele = this.props;
    let url = '/trainer/' + ele.trainer_id;
    console.log(url);
    return (
      <div className="trainerElement col-md-3">
        <div className="card img-fluid">
          <img className="card-img-top" src={ele.trainer_avatar} alt="Card image" />
          <div className="card-img-overlay">
            <h4 className="card-title titleTrainer">{ele.trainer_name}</h4>
          </div>
          <p className="card-text textTrainer">{ele.experience} years experience</p>
          <p className="card-text textTrainer">"{ele.trainer_quote}"</p>
          <p className="card-text textTrainer" >{ele.trainer_cost.toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
          })}</p>
          <a href={url} className="btnSeeTrainer"><button className="btn btn-primary">See Profile</button></a>
        </div>
      </div>
    );
  }
}
export default TrainerElement