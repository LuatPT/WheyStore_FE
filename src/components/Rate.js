import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Star from './Star';

class Rate extends React.Component {

  componentDidMount = () => {
    const { getRate, productId } = this.props;
    getRate.getRateByProduct({ product_id: productId })
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
                  {/* <p>STT: {ele.rate_id}</p> */}
                  <p className="pDate">{ele.create_at}</p>
                  <p className="pUser">User: {ele.user_id}</p><br />
                  <p className="pComment"> {ele.comment}</p>
                </div>

              ))
            }
          </div>
          <div className="newComment">
            <Star starCount={1} />
            <input placeholder="Nhập đánh giá của bạn tại đây" />
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