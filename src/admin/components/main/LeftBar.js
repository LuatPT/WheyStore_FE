import React from 'react';
class LeftBar extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <ul className="nav nav-tabs flex-column" role="tablist">
          <li className="active">
            <a href="/admin/home" >Home</a>
          </li>
          <li>
            <a href="/admin/user" >User</a>
          </li>
          <li >
            <a href="/admin/product">Product</a>
          </li>
          <li >
            <a href="/admin/cate" >Category</a>
          </li>
          <li >
            <a href="/admin/post">Post</a>
          </li>
        </ul>

      </div>
    );
  }
}
export default LeftBar
