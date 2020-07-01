import React from 'react';
import Headers from './main/Header';
import Body from './main/Body';
import Footer from './main/Footer';
import LoginContainer from '../containers/user/LoginContainer';
class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <Headers />
        <LoginContainer />
        <Body />
        <Footer />
      </div>
    );
  }
}
export default Home;
