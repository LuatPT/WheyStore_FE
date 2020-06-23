import React from 'react';
class Post extends React.Component {
  render() {
    const ele = this.props;
    return (
      <div className="col-md-4 divNewPost">
        <button className="btnNewPost">Read more...</button>
        <p className="pDatePost">{ele.create_at}</p>
        <p>{ele.content}</p>
      </div>
    );
  }
}
export default Post