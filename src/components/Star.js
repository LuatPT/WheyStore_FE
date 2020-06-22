import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.starCount
    };
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  render() {
    const { rating } = this.state;
    return (
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={this.onStarClick.bind(this)}
      />
    );
  }
}
export default Star;