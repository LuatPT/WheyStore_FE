import React from 'react';
import RateContainer from '../../containers/rate/RateContainer';
class DetailProduct extends React.Component {
  constructor(props) {
    super(props);
    this.soLuong = React.createRef();
  }
  componentDidMount = () => {
    const { getDetailById } = this.props;
    getDetailById.getDetailProduct(this.props.product_id)
  };
  addNewItem = () => {
    const { product } = this.props;
    const { DetailAction, userId } = this.props;
    var item = {
      user_id: userId,
      product_id: product.product_id,
      soluong: this.soLuong.current.value,
    };
    DetailAction.checkExistProduct(item);
  };
  render() {
    const { product } = this.props;
    const salePrice = (product.product_price * (100 - product.product_sale)) / 100;
    return (
      <div>
        <div className='divDetail row' >
          <div className='leftDetail col-md-4'>
            <img src={product.product_img} alt='ok' width='300px' height='300px' />
          </div>
          <div className='rightDetail col-md-8'>
            <p className='detailName'>
              {product.product_name}
            </p>
            <p className='detailSalePrice'>
              {salePrice.toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND',
              })}
            </p>
            <p className='descDetail'>{product.product_note}</p>
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
        <div className="rate">
          <RateContainer productId={this.props.product_id} />
        </div>
      </div>
    );
  }
}
export default DetailProduct;
