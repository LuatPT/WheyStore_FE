import React from 'react';
import Post from './Post';
class ListNewPost extends React.Component {
  componentDidMount = () => {
    const { getNewPostAc } = this.props;
    getNewPostAc.getNewPostAction()
  }
  render() {
    const { listPost } = this.props;
    return (
      <div>
        <hr />
        <h3 className="h3New">New Posts</h3>
        <div className="row divListNewPost">
          {listPost.map((ele, key) => (
            <Post key={key}  {...ele} />
          ))}
        </div>
        <a href="/allpost">Xem tất cả</a>
      </div >
    );
  }
}
export default ListNewPost