import React from 'react'

class UserManager extends React.Component {
  componentDidMount = () => {
    const { GetListUser } = this.props;
    GetListUser.getListUserAction();
  }
  render() {
    const { listUser } = this.props;
    console.log(listUser);

    return (
      <div className="userManager row">
        userManager
      </div>
    );
  }
}
export default UserManager