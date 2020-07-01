import React from 'react';
import Star from './Star';

class Rate extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      starCount: 1,
      comment: ""
    })
  }
  componentDidMount = () => {
    const { getRate, productId } = this.props;
    getRate.getRateByProduct({ product_id: productId })
  }
  chooseStar = (nextValue, prevValue, name, eve) => {
    this.setState({ starCount: nextValue });
  }
  typeComment = (eve) => {
    this.setState({ comment: eve.target.value });
  }
  addNewComment = (event) => {
    const { addRate, productId } = this.props;
    let obj = {
      user_id: localStorage.getItem('userId'),
      product_id: productId,
      rate: this.state.starCount,
      comment: this.state.comment,
      image: null
    };
    console.log(obj);
    addRate.addRateAction(obj);
  }
  render() {
    const { listRate } = this.props;
    if (listRate) {
      return (
        <div className="divAllRate">
          <h3 className="h3HR">Nhận xét, đánh giá ({listRate.length} lượt)</h3>
          <div className="divRate row">
            {
              listRate.map((ele, key) => (
                <div key={key} className="divRateItem col-md-6">
                  <Star starCount={ele.rate} />
                  <p className="pDate">{ele.create_at}</p>
                  <p className="pUser">User: {ele.user_id}</p><br />
                  <p className="pComment"> {ele.comment}</p>
                </div>

              ))
            }
          </div>
          <div className="newComment">
            <Star starCount={this.state.starCount} chooseStar={this.chooseStar} />
            <input name="comment" placeholder="Nhập đánh giá của bạn tại đây" onChange={this.typeComment} />
            <input type="file" name="image" />
            <button onClick={() => this.addNewComment()} >Thêm</button>
          </div>
        </div >
      )
    }
    else {
      return (
        <p>Không có đánh giá nào</p>
      )
    }
  }
}
export default Rate;