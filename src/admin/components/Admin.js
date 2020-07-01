import React from 'react';
import Adm_Header from './main/Adm_Header';
import ProductManager from './admin_product/ProductManager';
import UserManager from './admin_user/UserManager';
import PostManager from './admin_post/PostManager';
import CateManager from './admin_cate/CateManager';
import DashBoard from './main/DashBoard';
import LeftBar from './main/LeftBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Admin extends React.Component {
  render() {
    return (
      <div className='App'>
        <Adm_Header />
        <div className="row">
          <LeftBar />
          <Router>
            <div className="rightBar">
              <Switch>
                <Route path='/admin/post'>
                  <PostManager />
                </Route>
                <Route path='/admin/cate'>
                  <CateManager />
                </Route>
                <Route path='/admin/user'>
                  <UserManager />
                </Route>
                <Route path='/admin/product'>
                  <ProductManager />
                </Route>
                <Route path='/admin'>
                  <DashBoard />
                </Route>
              </Switch>
            </div>
          </Router >
        </div>
      </div>
    );
  }
}
export default Admin