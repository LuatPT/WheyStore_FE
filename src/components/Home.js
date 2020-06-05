import React from 'react';
import Headers from './Header';
import Body from './Body';
import Footer from './Footer';
import LoginContainer from '../containers/LoginContainer';
import CartContainer from '../containers/CartContainer';
import CheckOutContainer from '../containers/CheckOutContainer';
class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <Headers />
        <LoginContainer />
        <CartContainer />
        <CheckOutContainer />
        <Body />
        <Footer />
      </div>
    );
  }
}
export default Home;
