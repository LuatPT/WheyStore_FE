import React from 'react';
class CartItem extends React.Component {
  constructor(props) {
    super(props);
    const ele = this.props;
    this.state = {
      soluong: ele.soluong,
    };
  }
  addSoLuong = async() => {
    await this.setState({
      soluong: Number(this.state.soluong) + 1,
    });
    const ele = this.props;
    this.updateCart(ele);
  };
  minusSoLuong = async() => {
    await this.setState({
      soluong: Number(this.state.soluong) - 1,
    });
    const ele = this.props;
    this.updateCart(ele);
  };
  updateCart = (element) => {
    const obj = {
      cart_id: element.cart_id,
      user_id: element.user_id,
      product_id: element.product_id,
      soluong: this.state.soluong,
    };

    const ele = this.props;
    if(this.state.soluong === 0){
      this.deleteCart(ele)
    }else{
    const { CartUpdate } = this.props;
    CartUpdate.updateCartAction(obj);
    }
    
  };
  deleteCart = (ele) => {
    const { CartDelete } = this.props;
    CartDelete.deleteToCart(ele.cart_id);
  };
  render() {
    const ele = this.props;
    return (
      <tr>
        <td>
          <img src={ele.product_img} alt='ok' width='100px' height='100px' />
        </td>
        <td>{ele.product_name}</td>
        <td>{ele.taste}</td>
        <td>{ele.gift}</td>
        <td>
          <button
            className='btnMinus col-md-4'
            onClick={() => this.minusSoLuong()}
          >
            -
          </button>
          <span type='text' className='btnSoLuong '>
            {this.state.soluong}
          </span>

          <button
            type='button'
            className='btnAdd col-md-4'
            onClick={() => this.addSoLuong()}
          >
            +
          </button>
        </td>
        <td>
          {ele.tong.toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
          })}
        </td>
        <td>
          <span className='btnEdit' onClick={() => this.updateCart(ele)}>
            <svg className='bi bi-pencil-square' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
              <path fillRule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />
            </svg>
          </span>
          <span className='btnDelete' onClick={() => this.deleteCart(ele)}>
            <svg className='bi bi-x-square' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
              <pat fillRule='evenodd' d='M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z' />
              <path fillRule='evenodd' d='M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z' />
            </svg>
          </span>
        </td>
      </tr>
    );
  }
}
export default CartItem;
