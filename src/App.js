import React from 'react';
import './App.css';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/admin'>
              <AdminPanel />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
