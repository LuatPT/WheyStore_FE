import React from 'react';
import './App.css';
import Home from './member/components/Home';
import AdminPanel from './member/components/AdminPanel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartContainer from './member/containers/cart/CartContainer';
import CheckOutContainer from './member/containers/cart/CheckOutContainer';
import DetailContainer from './member/containers/product/DetailContainer';
import AllPostContainer from './member/containers/post/AllPostContainer';
import FullPostContainer from './member/containers/post/FullPostContainer';
import HeaderCommon from './member/components/main/HeaderCommon';
import ListTrainerContainer from './member/containers/trainer/ListTrainerContainer';
import DetailTrainerContainer from './member/containers/trainer/DetailTrainerContainer';
import Game from './member/components/game/Game';

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
              <div>
                <HeaderCommon />
                <CartContainer />
              </div>
            </Route>
            <Route path='/product/:product_id' render={props =>
              <div>
                <HeaderCommon />
                <DetailContainer {...props.match.params} />
              </div>} />
            <Route path='/post/:post_id' render={props =>
              <div>
                <HeaderCommon />
                <FullPostContainer {...props.match.params} />
              </div>
            } />
            <Route path='/allpost'>
              <div>
                <HeaderCommon />
                <AllPostContainer />
              </div>
            </Route>
            <Route path='/alltrainer'>
              <div>
                <HeaderCommon />
                <ListTrainerContainer />
              </div>
            </Route>
            <Route path='/trainer/:trainer_id' render={props =>
              <div>
                <HeaderCommon />
                <DetailTrainerContainer {...props.match.params} />
              </div>
            } />
            <Route path='/checkout'>
              <div>
                <HeaderCommon />
                <CheckOutContainer />
              </div>
            </Route>
            <Route path='/game'>
              <Game />
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
