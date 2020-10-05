import React from 'react'
class Box extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <span className="giftSpan">{result}</span>
    )
  }
}
export default Box