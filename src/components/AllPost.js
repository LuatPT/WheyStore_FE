import React from 'react';
import Post from './Post';
class AllPost extends React.Component {
  componentDidMount = () => {
    const { getAllPostAc } = this.props;
    getAllPostAc.getAllPostAction()
  }
  render() {
    const { listAllPost } = this.props;
    return (
      <div>
        <hr />
        <h3 className="h3New">All Post</h3>
        <div className="row divListNewPost">
          {listAllPost.map((ele) => (
            <Post  {...ele} />
          ))}
        </div>
      </div >
    );
  }
}
export default AllPost