import React from 'react';
class FullPost extends React.Component {
  componentDidMount = () => {
    const { getPostById } = this.props;
    getPostById.getDetailPost(this.props.post_id);
  }
  render() {
    const { post } = this.props;
    return (
      <div className="divFullPost row">
        <div className="leftPost col-md-6">
          <h4 className="headerPostFull">{post.header}</h4>
          <div className="divThumbNailFull">
            <img className="thumbnailFull" src={post.thumb_nail} alt="thumbnail" width="400px" height="300px" />
          </div>
          <p className="pDatePostFull">{post.create_at}</p><br />
        </div>
        <div className="col-md-6">
          <p>{post.content}</p>
        </div>
      </div >
    );
  }
}
export default FullPost