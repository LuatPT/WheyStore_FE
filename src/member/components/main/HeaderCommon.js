import React from 'react';
const HeaderCommon = () => {
  return <div className='divHeaderCommon'>
    <ul className='nav nav-pills navCommon'>
      <li className='nav-item'>
        <a className='nav-link itemCategory' href='/' id='home'>
          Whey Store VN
        </a>
      </li>
      <li
        className=' nav-item'
        style={{ display: localStorage.getItem('userId') == null ? 'block' : 'none' }}
        data-tip='Login/Register'
      >
        <a className='nav-link itemCategory' href='#' id='login'>
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path fillRule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </a>
      </li>
      <li
        className=' nav-item'
        style={{
          display: Number(localStorage.getItem('role')) !== 0 || localStorage.getItem('role') === null ? 'none' : 'block',
        }}
      >
        <a className='nav-link itemCategory' href='/admin' id='admin' data-tip='Admin'>
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-wallet-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
            <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
          </svg>
        </a>
      </li>

      <li
        className=' nav-item'
        style={{ display: localStorage.getItem('userId') == null ? 'none' : 'block' }}
      >
        <a className='nav-link itemCategory' id='logout' href='/' data-tip='Log Out'>
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-bounding-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
            <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </a>
      </li>
      <li className=' nav-item'>
        <a
          className='nav-link itemCategory cart'
          style={{ display: localStorage.getItem('userId') == null ? 'none' : 'block' }}
          id='cart'
          href='/cart'
          data-tip='Giỏ hàng'
        >
          <span className='spanCart'>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </span>
        </a>
      </li>
    </ul>
  </div>;
};
export default HeaderCommon;
