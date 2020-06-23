import React from 'react';
import ListProductContainer from '../containers/ListProductContainer';
import NewPostContainer from '../containers/NewPostContainer';
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
