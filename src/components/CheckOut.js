import React from 'react';
class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  changeInput = (eve) => {
    this.setState({
      email: eve.target.value,
    });
  };
  closeDetail = () => {
    const { sendMailActions } = this.props;
    sendMailActions.sendMailAction(this.state.email);
    document.getElementById('divCheckOut').style.display = 'none';
  };
  render() {
    const { listCartToCheckOut } = this.props;
    let tongAll = 0;
    if (listCartToCheckOut.length > 0) {
      return (
        <div id='divCheckOut'>
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
          <h3 className='pHeaderCO'>ĐƠN HÀNG CỦA BẠN</h3>
          <div className='divTbCO'>
            <table className='table tbCheckOut '>
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Tổng</th>
                </tr>
              </thead>
              <tbody>
                {listCartToCheckOut.map((ele, key) => {
                  tongAll = tongAll + ele.tong;
                  return (
                    <tr key={key}>
                      <td>
                        {ele.product_name}x{ele.soluong}
                      </td>
                      <td>
                        {ele.tong.toLocaleString('it-IT', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td>Tổng</td>
                  <td>
                    {tongAll.toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    })}{' '}
                    đ
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div>
            <input
              type='text'
              onChange={() => this.changeInput()}
              placeholder='Nhập địa chỉ email của bạn để tiếp tục'
            />
          </div>
          <div>
            <p>
              Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
              <br />
              Vui lòng sử dụng ID Đơn hàng của bạn như một phần để tham khảo khi
              thanh toán.
              <br />
              Đơn hàng của bạn sẽ không được vận chuyển cho tới khi tiền được
              gửi vào tài khoản của chúng tôi.
            </p>
            <table className='table'>
              <thead>
                <tr className='row'>
                  <th className='col-md-1'>STT</th>
                  <th className='col-md-5'>Địa chỉ</th>
                  <th className='col-md-3'>Số TK</th>
                  <th className='col-md-3'>Chủ TK</th>
                </tr>
              </thead>
              <tbody>
                <tr className='row'>
                  <td className='col-md-1'>1</td>
                  <td className='col-md-5'>
                    Techcombank chi nhánh Cát Linh Hà Nội
                  </td>
                  <td className='col-md-3'>19028091123889</td>
                  <td className='col-md-3'>Đinh Văn Trường</td>
                </tr>
                <tr className='row'>
                  <td className='col-md-1'>2</td>
                  <td className='col-md-5'>Vietcombank chi nhánh Hà Nội</td>
                  <td className='col-md-3'>0021000326599</td>
                  <td className='col-md-3'>Đinh Văn Trường</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={this.closeDetail}>Chấp nhận</button>
        </div>
      );
    } else {
      return (
        <div id='divCheckOut'>
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
          <h3 className='pHeaderCO'>ĐƠN HÀNG CỦA BẠN</h3>
          <p>
            Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
            <br />
            Vui lòng sử dụng ID Đơn hàng của bạn như một phần để tham khảo khi
            thanh toán.
            <br />
            Đơn hàng của bạn sẽ không được vận chuyển cho tới khi tiền được gửi
            vào tài khoản của chúng tôi.
          </p>
          <button onClick={this.closeDetail}>Chấp nhận</button>
        </div>
      );
    }
  }
}
export default CheckOut;
