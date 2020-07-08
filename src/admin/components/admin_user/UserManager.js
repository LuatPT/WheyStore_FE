import React from 'react'
import UserElementContainer from '../../container/user/UserElementContainer';
import AddUserForm from './AddUserForm';

class UserManager extends React.Component {
  componentDidMount = () => {
    const { GetListUser } = this.props;
    GetListUser.getListUserAction();
  }
  render() {
    const { listUser } = this.props;
    return (
      <div className="userManager row">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>User ID </th>
              <th>User Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((ele, key) =>
              < UserElementContainer {...ele} key={ele.user_id} />
            )}
            <AddUserForm />
          </tbody>
        </table>
      </div >
    );
  }
}
export default UserManager