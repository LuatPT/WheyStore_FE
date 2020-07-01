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

import ProductManager from './admin/components/admin_product/ProductManager';
import UserManager from './admin/components/admin_user/UserManager';
import PostManager from './admin/components/admin_post/PostManager';
import CateManager from './admin/components/admin_cate/CateManager';
import DashBoard from './admin/components/main/DashBoard';

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
            <Route path='/detail/:product_id' render={props =>
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
            <Route path='/checkout'>
              <div>
                <HeaderCommon />
                <CheckOutContainer />
              </div>
            </Route>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/admin/post'>
              <PostManager />
            </Route>
            <Route path='/admin/category'>
              <CateManager />
            </Route>
            <Route path='/admin/user'>
              <UserManager />
            </Route>
            <Route path='/admin/product'>
              <ProductManager />
            </Route>
            <Route path='/admin/home'>
              <DashBoard />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}
export default App;
