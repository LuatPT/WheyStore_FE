import React from 'react';

class DetailProduct extends React.Component {
  constructor(props) {
    super(props);
    this.soLuong = React.createRef();
  }
  // componentDidUpdate = () => {
  //   const { DetailAction2 } = this.props;
  //   const ele = this.props;
  //   DetailAction2.checkExistProduct({ productId: ele.product_id });
  // };
  // addOrUpdate = () => {
  //   const { cart } = this.props;
  //   if (cart) {
  //     console.log(cart);
  //   } else {
  //     console.log('nguuu');
  //   }
  // };
  addNewItem = () => {
    const ele = this.props;
    // console.log(ele);
    const { DetailAction, add, cart, userId, closeDetail } = this.props;
    // console.log(cart);

    var item = {
      user_id: userId,
      product_id: ele.product_id,
      soluong: this.soLuong.current.value,
    };
    DetailAction.checkExistProduct(item);

    closeDetail();
  };
  render() {
    const ele = this.props;
    const { show, closeDetail } = this.props;
    const salePrice = (ele.product_price * (100 - ele.product_sale)) / 100;
    return (
      <div className='divDetail' style={{ display: show ? 'flex' : 'none' }}>
        <div className='leftDetail'>
          <img src={ele.product_img} alt='ok' width='300px' height='300px' />
        </div>
        <div className='rightDetail'>
          <p className='detailName'>
            {ele.product_name}
            <span className='dauX' onClick={() => closeDetail()}>
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
          </p>
          <p className='detailSalePrice'>
            {salePrice.toLocaleString('it-IT', {
              style: 'currency',
              currency: 'VND',
            })}
          </p>
          <p className='descDetail'>{ele.product_note}</p>
          <p className='chooseTaste'>Chọn Hương Vị</p>
          <p>
            <span className='itemTaste'>Chocolate</span>
            <span className='itemTaste'>Cookies Cream</span>
            <span className='itemTaste'>Strawberry Banana</span>
            <span className='itemTaste'>Vanilla</span>
          </p>
          <p className='chooseGift'>Chọn Quà Tặng</p>
          <p>
            <span className='itemGift'>Dây Kéo Lưng</span>
            <span className='itemGift'>Găng Tay</span>
            <span className='itemGift'>Bình BPI </span>
            <span className='itemGift'>Ko quà -100.000đ</span>
          </p>
          <input
            type='text'
            className='inputCount'
            placeholder='Nhập số lượng...'
            ref={this.soLuong}
          />
          <button className='addCart' onClick={this.addNewItem}>
            Thêm vào giỏ
          </button>
        </div>
      </div>
    );
  }
}
export default DetailProduct;
