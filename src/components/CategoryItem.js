import React from 'react';
import ReactTooltip from 'react-tooltip';

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
  };
  render() {
    const { listCate, getProductbyCategory, role } = this.props;
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
        <li
          className=' nav-item'
          style={{
            display: Number(role) !== 0 || role === null ? 'none' : 'block',
          }}
        >
          <a className='nav-link itemCategory' href='/admin' id='admin' data-tip='Admin'>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-wallet-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
            </svg>
          </a>
        </li>

        <li
          className=' nav-item'
          onClick={this.logOut}
          style={{ display: userId == null ? 'none' : 'block' }}
        >
          <a className='nav-link itemCategory' id='logout' href='#' data-tip='Log Out'>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
            </svg>
          </a>
        </li>
        <li className=' nav-item'>
          <a
            className='nav-link itemCategory cart'
            onClick={this.showCart}
            style={{ display: userId == null ? 'none' : 'block' }}
            id='cart'
            href='/cart'
            data-tip='Giỏ hàng'
          >
            <span className='spanCart'>
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </span>
          </a>
        </li>
        <ReactTooltip />
      </ul>
    );
  }
}
export default CategoryItem;
