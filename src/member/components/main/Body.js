import React from 'react';
import ListProductContainer from '../../containers/product/ListProductContainer';
import NewPostContainer from '../../containers/post/NewPostContainer';
class Body extends React.Component {

  render() {
    return (
      <div>
        <ListProductContainer />
        <NewPostContainer />
      </div >
    );
  }



};
export default Body;
