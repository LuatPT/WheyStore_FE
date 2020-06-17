import React from 'react';
class CategoryItem extends React.Component {
  showLogin = () => {
    document.getElementById('loginForm').style.display = 'block';
  };
  logOut = () => {
    const { Logout } = this.props;
    Logout.logoutAction();
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
  };
  showCart = () => {
    const { CartActionToCate } = this.props;

    CartActionToCate.getCartAction({ userId: localStorage.getItem('userId') });
    document.getElementById('cartApp').style.display = 'block';
  };
  render() {
    const { listCate, getProductbyCategory } = this.props;
    let userId = localStorage.getItem('userId');
    return (
      <ul className='nav nav-pills'>
        {listCate.map((ele, key) => (
          <li
            className=' nav-item'
            key={key}
            onClick={() =>
              getProductbyCategory.getProductbyCate(ele.category_id)
            }
          >
            <a className='nav-link itemCategory' href='#'>
              <span key={key}>{ele.category_name}</span>
            </a>
          </li>
        ))}
        <li
          className=' nav-item'
          onClick={this.showLogin}
          style={{ display: userId == null ? 'block' : 'none' }}
        >
          <a className='nav-link itemCategory' href='#' id='login'>
            Đăng ký/Đăng nhập
          </a>
        </li>
        <li className=' nav-item'>
          <a
            className='nav-link itemCategory cart'
            onClick={this.showCart}
            style={{ display: userId == null ? 'none' : 'block' }}
            id='cart'
          >
            <span className='spanCart'>Giỏ hàng</span>
          </a>
        </li>
        <li
          className=' nav-item'
          onClick={this.logOut}
          style={{ display: userId == null ? 'none' : 'block' }}
        >
          <a className='nav-link itemCategory' id='logout' href='#'>
            Log Out
          </a>
        </li>
      </ul>
    );
  }
}
export default CategoryItem;
