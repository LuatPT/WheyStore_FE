import React from 'react';
import Headers from './Header';
import Body from './Body';
import Footer from './Footer';
import LoginContainer from '../containers/LoginContainer';
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
