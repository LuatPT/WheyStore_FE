import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
class ShowStar extends React.Component {
  render() {
    const { starCount } = this.props;
    return (
      <StarRatingComponent
        name="rate"
        starCount={5}
        value={starCount}
      />
    );
  }
}
export default ShowStar;