import React from 'react';
import * as constants from "../../constants/index";

class AddPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.thumb_nail = React.createRef();
    this.post_cate_id = React.createRef();
    this.content = React.createRef();
  }
  addPost = () => {
    const { AddPost } = this.props;
    let obj = {
      user_id: Number(localStorage.getItem('userId')),
      create_at: constants.formatDate(new Date()),
      update_at: constants.formatDate(new Date()),
      header: this.header.current.value,
      thumb_nail: this.thumb_nail.current.value,
      content: this.content.current.value,
      post_cate_id: Number(this.post_cate_id.current.value)
    }
    AddPost.addPostAction(obj);
  }
  render() {
    return (
      <div className="addPostForm row">
        <div className="leftPost col-md-3">
          <img src='https://lh3.googleusercontent.com/proxy/X1fxPcoCa9JLBnaA_KQGB4YFflP3-KW3ohzh8saCSnXAqmtIsKWUyM5sskx6wcA0duosJ_ll44ZhQ63gfnFFOc4IJSdID6ufTAw-auNn5ixHojDu_aEg-hKymMQiToxyZ1lnadsMh2JIO002v8pI9g8lhP9g' alt="Loading..." width="100%" height="100%" />
        </div>
        <div className="rightPost cold-md-9">
          <div className="inline-flex row updatePostItem">
            <label className="col-md-4">Header: </label>
            <input type="text" className="col-md-8" placeholder="Header..." ref={this.header} />
          </div>
          <div className="inline-flex row updatePostItem">
            <label className="col-md-4">Thumbnail: </label>
            <input type="text" className="col-md-8" placeholder="Thumbnail link..." ref={this.thumb_nail} />
          </div>
          <div className="inline-flex row updatePostItem">
            <label className="col-md-4">Post Category: </label>
            <input type="text" className="col-md-8" placeholder="Post Category..." ref={this.post_cate_id} />
          </div>
          <div className="inline-flex row updatePostItem">
            <label className="col-md-4">Content: </label>
            <textarea rows="10" className="col-md-8" placeholder="Content..." ref={this.content} />
          </div>
          <button onClick={() => this.addPost()} className="btn btn-danger">Add</button>
        </div>
      </div>
    );
  }
}
export default AddPostForm