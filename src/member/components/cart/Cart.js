import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  componentDidMount = () => {
    const { CartAction } = this.props;
    CartAction.getCartAction({ userId: localStorage.getItem('userId') });
  };
  render() {
    const { listCart, CartUpdate, CartDelete } = this.props;
    let tongAll = 0;
    if (listCart.length > 0) {
      return (
        <div>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Tên Sản phẩm</th>
                <th>Hương vị</th>
                <th>Quà tặng</th>
                <th>Số lượng</th>
                <th>Tổng giá</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listCart.map((ele, key) => {
                tongAll = tongAll + ele.tong;
                return (
                  <CartItem
                    {...ele}
                    key={key}
                    tongAll={tongAll}
                    CartUpdate={CartUpdate}
                    CartDelete={CartDelete}
                  />
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan='3'>
                  Tổng đơn hàng:
                  {tongAll.toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
                </td>
                <td
                  colSpan='1'
                  style={{ display: listCart.length > 0 ? 'flex' : 'none' }}
                >
                <a href='/checkout' className="btn btn-info">Thanh Toán</a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    } else {
      return (
        <div >
          Vui lòng chọn sản phẩm !
        </div>
      );
    }
  }
}
export default Cart;
