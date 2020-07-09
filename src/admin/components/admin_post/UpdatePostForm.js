import React from 'react';
import * as constants from "../../constants/index"

class UpdatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.thumb_nail = React.createRef();
    this.post_cate_id = React.createRef();
    this.content = React.createRef();
  }

  componentDidMount = () => {
    const { ShowUpdatePost } = this.props;
    ShowUpdatePost.getDetailPost(this.props.post_id);
  }
  updatePost = () => {
    const { UpdatePost, post } = this.props;
    let obj = {
      post_id: Number(post.post_id),
      user_id: Number(localStorage.getItem('userId')),
      create_at: constants.formatDate(post.create_at),
      update_at: constants.formatDate(new Date()),
      header: this.header.current.value,
      thumb_nail: this.thumb_nail.current.value,
      content: this.content.current.value,
      post_cate_id: Number(this.post_cate_id.current.value)
    }
    UpdatePost.updatePostAction(obj);
  }
  render() {
    const { post } = this.props;
    return (
      <div className="updatePostForm row">
        <div className="leftPost col-md-3">
          <img src={post.thumb_nail} alt="Loading..." width="100%" height="100%" />
        </div>
        <div className="rightPost cold-md-9">
          <div className="inline-flex row updatePostItem">
            <label className="col-md-4">User ID: </label>
            <span className="col-md-8">{post.user_id}</span>
          </div>
          <div className="inline-flex row updatePostItem">
            <label className="col-md-4">Header: </label>
            <input type="text" className="col-md-8" defaultValue={post.header} ref={this.header} />
          </div>
          <div className="inline-flex row updatePostItem">
            <label className="col-md-4">Thumbnail: </label>
            <input type="text" className="col-md-8" defaultValue={post.thumb_nail} ref={this.thumb_nail} />
          </div>
          <div className="inline-flex row updatePostItem">
            <label className="col-md-4">Post Category: </label>
            <input type="text" className="col-md-8" defaultValue={post.post_cate_id} ref={this.post_cate_id} />
          </div>
          <div className="inline-flex row updatePostItem">
            <label className="col-md-4">Content: </label>
            <textarea rows="10" className="col-md-8" defaultValue={post.content} ref={this.content} />
          </div>
          <button onClick={() => this.updatePost(post.post_id)} className="btn btn-danger">Update</button>
        </div>
      </div>
    );
  }
}
export default UpdatePostForm