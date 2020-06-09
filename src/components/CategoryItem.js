import React from 'react';
class CategoryItem extends React.Component {
  showLogin = () => {
    document.getElementById('loginForm').style.display = 'block';
  };
  logOut = () => {
    const { Logout } = this.props;
    Logout.logoutAction();
    // document.getElementById('cart').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
  };
  showCart = () => {
    const { CartActionToCate, userId } = this.props;
    CartActionToCate.getCartAction(userId);
    document.getElementById('cartApp').style.display = 'block';
  };
  render() {
    const { listCate, isDisplayCart } = this.props;
    return (
      <ul className='nav nav-pills'>
        {listCate.map((ele, key) => (
          <li className=' nav-item' key={key}>
            <a className='nav-link itemCategory' href='xem.vn'>
              <span key={key}>{ele.category_name}</span>
            </a>
          </li>
        ))}
        <li className=' nav-item' onClick={this.showLogin}>
          <a className='nav-link itemCategory' href='#' id='login'>
            Đăng ký/Đăng nhập
          </a>
        </li>
        <li className=' nav-item'>
          <a
            className='nav-link itemCategory cart'
            onClick={this.showCart}
            // style={{ display: isDisplayCart ? 'block' : 'none' }}
            id='cart'
          >
            <span className='spanCart'>Giỏ hàng</span>
          </a>
        </li>
        <li className=' nav-item' onClick={this.logOut}>
          <a className='nav-link itemCategory' id='logout' href='#'>
            Log Out
          </a>
        </li>
      </ul>
    );
  }
}
export default CategoryItem;
