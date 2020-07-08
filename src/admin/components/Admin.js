import React from 'react';
import AdmHeader from './main/AdmHeader';
import PostManager from './admin_post/PostManager';
import DashBoard from './main/DashBoard';
import LeftBar from './main/LeftBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductAdmContainer from '../container/product/ProductAdmContainer';
import UpdateProductAdm from '../container/product/UpdateProductAdm';
import UserAdmContainer from '../container/user/UserAdmContainer';
import CateAdmContainer from '../container/category/CateAdmContainer';

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
                  <CateAdmContainer />
                </Route>
                <Route path='/admin/user'>
                  <UserAdmContainer />
                </Route>
                <Route path='/admin/product'>
                  <ProductAdmContainer />
                </Route>
                <Route path='/admin/updateProduct/:product_id' render={props =>
                  <UpdateProductAdm {...props.match.params} />
                }
                />
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