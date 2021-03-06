import React from 'react';

class UpdateTrainerForm extends React.Component {
  constructor(props) {
    super(props);
    this.trainer_name = React.createRef();
    this.experience = React.createRef();
    this.trainer_avatar = React.createRef();
    this.trainer_quote = React.createRef();
    this.trainer_cost = React.createRef();
  }
  componentDidMount = () => {
    const { ShowUpdateTrainer } = this.props;
    ShowUpdateTrainer.getDetailTrainer(this.props.trainer_id);
  }
  updateTrainer = (ele) => {
    const { UpdateTrainer } = this.props;
    const eleUpdate = {
      trainer_id: ele.trainer_id,
      trainer_name: this.trainer_name.current.value,
      experience: this.experience.current.value,
      trainer_avatar: this.trainer_avatar.current.value,
      trainer_quote: this.trainer_quote.current.value,
      trainer_cost: this.trainer_cost.current.value,
    }
    UpdateTrainer.updateTrainerAction(eleUpdate);
  }
  render() {
    const { trainer, key } = this.props;
    return (
      <div className="row" key={key}>
        <div className="col-md-5">
          <img src={trainer.trainer_avatar} alt="..." width="100%" height="100%" />
        </div>
        <div className="col-md-7">
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Trainer ID: </label>
            <span className="col-md-8">{trainer.trainer_id}</span>
          </div>
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Trainer Name: </label>
            <input type='text' className="col-md-8" defaultValue={trainer.trainer_name} ref={this.trainer_name} />
          </div>
          <div className="inline-flex row updateProductItem" >
            <label className="col-md-4">Category ID: </label>
            <input type='text' className="col-md-8" defaultValue={trainer.experience} ref={this.experience} />
          </div>
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Product Img: </label>
            <input type='text' className="col-md-8" defaultValue={trainer.trainer_avatar} ref={this.trainer_avatar} />
          </div>
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Product Note: </label>
            <input type='text' className="col-md-8" defaultValue={trainer.trainer_quote} ref={this.trainer_quote} />
          </div>
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Product Price: </label>
            <input type='text' className="col-md-8" defaultValue={trainer.trainer_cost} ref={this.trainer_cost} />
          </div>
          <button type="button" className="btn btn-warning" onClick={() => this.updateTrainer(trainer)}>Update
            <span className='btnEdit' >
              <svg className='bi bi-pencil-square' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                <path fillRule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />
              </svg>
            </span>
          </button>
        </div>

      </div>
    );
  }
}

export default UpdateTrainerForm