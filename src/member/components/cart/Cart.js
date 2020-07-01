import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  componentDidMount = () => {
    const { CartAction } = this.props;
    CartAction.getCartAction({ userId: localStorage.getItem('userId') });
  };
  closeDetail = () => {
    document.getElementById('cartApp').style.display = 'none';
  };
  render() {
    const { listCart, CartUpdate, CartDelete } = this.props;
    let tongAll = 0;
    if (listCart.length > 0) {
      return (
        <div className='divCart' id='cartApp'>
          <span className='dauX' onClick={() => this.closeDetail()}>
            <svg
              className='bi bi-x-square'
              width='1em'
              height='1em'
              viewBox='0 0 16 16'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'
              />
              <path
                fillRule='evenodd'
                d='M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z'
              />
              <path
                fillRule='evenodd'
                d='M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z'
              />
            </svg>
          </span>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Tên Sản phẩm</th>
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
                  <button>
                    <a href='/checkout'>Thanh Toán</a>
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    } else {
      return (
        <div className='divCart' id='cartApp'>
          <span className='dauX' onClick={() => this.closeDetail()}>
            <svg
              className='bi bi-x-square'
              width='1em'
              height='1em'
              viewBox='0 0 16 16'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'
              />
              <path
                fillRule='evenodd'
                d='M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z'
              />
              <path
                fillRule='evenodd'
                d='M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z'
              />
            </svg>
          </span>
          Vui lòng chọn sản phẩm !
        </div>
      );
    }
  }
}
export default Cart;
