import React from 'react'

class AddUserForm extends React.Component {
  constructor(props) {
    super(props);
    const ele = this.props;
    this.state = ({
      currentRole: Number(ele.role)
    })
  }

  toggleRole = () => {
    if (Number(this.state.currentRole) === 1) {
      this.setState({
        currentRole: 0
      })
    } else {
      this.setState({
        currentRole: 1
      })
    }
  }
  render() {
    return (
      <tr className="addUserForm" >
        < td >Add New User</td >
        <td>
          <input type="text" placeholder="User name..." />
        </td>
        <td>
          <label className="switch">
            <input type="checkbox" defaultChecked={this.state.currentRole === 0 ? true : false} onChange={() => this.toggleRole()} />
            <span className="slider round"></span>
          </label>
        </td>
        <td>
          <button className="btn btn-success col-md-4" >Add</button>
        </td>
      </tr >
    );
  }
}
export default AddUserForm