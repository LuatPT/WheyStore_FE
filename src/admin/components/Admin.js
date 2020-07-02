import React from 'react';
import AdmHeader from './main/AdmHeader';
import UserManager from './admin_user/UserManager';
import PostManager from './admin_post/PostManager';
import CateManager from './admin_cate/CateManager';
import DashBoard from './main/DashBoard';
import LeftBar from './main/LeftBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductAdmContainer from '../container/product/ProductAdmContainer';

class Admin extends React.Component {
  render() {
    return (
      <div className='AppAdmin'>
        <AdmHeader />
        <div className="row">
          <LeftBar />
          <Router>
            <div className="rightBar col-md-11">
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
                  <ProductAdmContainer />
                </Route>
                <Route path='/admin/product/new'>
                  <ProductAdmContainer />
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