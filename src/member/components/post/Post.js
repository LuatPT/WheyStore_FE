import React from 'react';
class Post extends React.Component {
  render() {
    const ele = this.props;
    let url = '/post/' + ele.post_id;
    return (
      <div className="col-md-4 divNewPost">
        <h4 className="headerPost">{ele.header}</h4>
        <div className="divThumbNail">
          <img className="thumbnail" src={ele.thumb_nail} alt="thumbnail" />
        </div>
        <a className="btnNewPost btn btn-info" href={url}>Read more...</a><br />
        <p className="pDatePost">{ele.create_at}</p><br />
        <p>{ele.content}</p>
      </div >
    );
  }
}
export default Post