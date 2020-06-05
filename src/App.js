import React from 'react';
import './App.css';
import Body from './components/Home'
import LoginContainer from './containers/LoginContainer';
import CartContainer from './containers/CartContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Home />
      </div>
    );
  }
}
export default App;
