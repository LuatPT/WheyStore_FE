import React from 'react';
class FullPost extends React.Component {
  componentDidMount = () => {
    const { getPostById } = this.props;
    getPostById.getDetailPost({ post_id: this.props.post_id });
  }
  render() {
    const { post } = this.props;
    return (
      <div className="divFullPost">
        <h4 className="headerPostFull">{post.header}</h4>
        <div className="divThumbNailFull">
          <img className="thumbnailFull" src={post.thumb_nail} alt="thumbnail" width="400px" height="300px" />
        </div>
        <p className="pDatePostFull">{post.create_at}</p><br />
        <p>{post.content}</p>
      </div >
    );
  }
}
export default FullPost