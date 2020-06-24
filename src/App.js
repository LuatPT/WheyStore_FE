import React from 'react';
import './App.css';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartContainer from './containers/CartContainer';
import CheckOutContainer from './containers/CheckOutContainer';
import DetailContainer from './containers/DetailContainer';
import AllPostContainer from './containers/AllPostContainer';
import FullPostContainer from './containers/FullPostContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/admin'>
              <AdminPanel />
            </Route>
            <Route path='/cart'>
              <CartContainer />
            </Route>
            <Route path='/detail/:product_id' render={props => <DetailContainer {...props.match.params} />} />
            <Route path='/post/:post_id' render={props => <FullPostContainer {...props.match.params} />} />
            <Route path='/allpost'>
              <AllPostContainer />
            </Route>
            <Route path='/checkout'>
              <CheckOutContainer />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}
export default App;
