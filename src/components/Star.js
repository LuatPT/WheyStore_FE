import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
class Star extends React.Component {
  onStarClick(nextValue, prevValue, name) {
    const { chooseStar } = this.props;
    chooseStar(nextValue, prevValue, name)
  }
  render() {
    const { starCount } = this.props;
    return (
      <StarRatingComponent
        name="rate"
        starCount={5}
        value={starCount}
        onStarClick={this.onStarClick.bind(this)}
      />
    );
  }
}
export default Star;