import React from 'react';
import Post from './Post';
class ListNewPost extends React.Component {
  componentDidMount = () => {
    const { getNewPostAc } = this.props;
    getNewPostAc.getNewPostAction()
  }
  render() {
    const { listPost } = this.props;
    console.log(listPost);
    return (
      <div>
        <h3 className="h3New">New Posts</h3>
        <div className="row divListNewPost">
          {listPost.map((ele) => (
            <Post  {...ele} />
          ))}
        </div>
      </div >
    );
  }
}
export default ListNewPost