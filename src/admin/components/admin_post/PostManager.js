import React from 'react'
import PostElement from './PostElement';

class PostManager extends React.Component {
  componentDidMount = () => {
    const { getAllPostAdm } = this.props;
    getAllPostAdm.getAllPostAction();
  }
  render() {
    const { listPostAdm } = this.props;
    let url = '/admin/newPost';
    return (
      <div className="postManager row">
        <table>
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th>Post ID </th>
                <th>User ID</th>
                <th>Header</th>
                <th>Create_at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listPostAdm.map((ele, key) =>
                < PostElement {...ele} key={ele.post_id} />
              )}
            </tbody>
          </table>
        </table>
        <button className="btn btn-outline-success col-md-2 btnAddPost">
          <a href={url}>
            Add New
          </a>
        </button>
      </div>
    );
  }
}
export default PostManager