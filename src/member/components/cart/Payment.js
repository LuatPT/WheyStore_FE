import { render } from '@testing-library/react'
import React from 'react'
class Payment extends React.Component {
  render() {
    const { tongAll, discount } = this.props;
    let total = discount ? (tongAll - tongAll * discount / 100) : tongAll;
    return (
      <div className=" divPayment">
        <p>Số tiền phải thanh toán: {total.toLocaleString('it-IT', {
          style: 'currency',
          currency: 'VND',
        })}{' '} đ</p>
      </div>
    )
  }
}
export default Payment