import React from 'react'

class AddTrainerForm extends React.Component {

  constructor(props) {
    super(props);
    this.trainer_name = React.createRef();
    this.experience = React.createRef();
    this.trainer_avatar = React.createRef();
    this.trainer_quote = React.createRef();
    this.trainer_cost = React.createRef();
  }
  addNewCate = () => {
    const { AddTrainer } = this.props;
    let obj = {
      trainer_name: this.trainer_name.current.value,
      experience: this.experience.current.value,
      trainer_avatar: this.trainer_avatar.current.value,
      trainer_quote: this.trainer_quote.current.value,
      trainer_cost: this.trainer_cost.current.value,
    }
    AddTrainer.addTrainerAction(obj);
  }
  render() {
    return (
      <tr className="addTrainerForm" >
        <td>Add New Trainer</td>
        <td>
          <input type="text" placeholder="Trainer name..." ref={this.trainer_name} />
        </td>
        <td>
          <input type="text" placeholder="Experience..." ref={this.experience} />
        </td>
        <td>
          <input type="text" placeholder="Trainer Avatar..." ref={this.trainer_avatar} />
        </td>
        <td>
          <textarea placeholder="Trainer quote..." ref={this.trainer_quote} />
        </td>
        <td>
          <input type="text" placeholder="Trainer cost..." ref={this.trainer_cost} />
        </td>
        <td>
          <button className="btn btn-success" onClick={() => this.addNewCate()}>Add</button>
        </td>
      </tr >
    );
  }
}
export default AddTrainerForm