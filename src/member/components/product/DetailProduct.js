import React from 'react';
import RateContainer from '../../containers/rate/RateContainer';
import * as constants from '../../constants/index';
class DetailProduct extends React.Component {
  constructor(props) {
    super(props);
    this.soLuong = React.createRef();
    this.state = {
      taste: 'Chocolate',
      gift: 'Bình BPI'
    }
  }
  componentDidMount = () => {
    const { getDetailById } = this.props;
    getDetailById.getDetailProduct(this.props.product_id);
  };
  chooseTaste = (ele) => {
    this.setState({ taste: ele.text });
  }
  chooseGift = (ele) => {
    this.setState({ gift: ele.text });
  }
  addNewItem = () => {
    const { product } = this.props;
    const { DetailAction, userId } = this.props;
    var item = {
      user_id: userId,
      product_id: product.product_id,
      soluong: this.soLuong.current.value,
      taste: this.state.taste,
      gift: this.state.gift
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
              {
                constants.tasteList.map((ele, idx) =>
                  <div className="radioCustom1"> 
                    <input type="radio"  id ={ele.id} className="radioHiddenTaste" name="taste" value={ele.text} defaultChecked={idx=== 0 ? true : false}/>
                    <label className='itemTaste' htmlFor={ele.id} onClick={() => this.chooseTaste(ele)} >{ele.text}</label>
                  </div>
                  
                )
              }
            <p className='chooseGift'>Chọn Quà Tặng</p>
              {
                constants.giftList.map((ele, idx) =>
                  <div className="radioCustom2">
                    <input type="radio"  id ={ele.id} className="radioHiddenGift" name="gift" value={ele.text} defaultChecked={idx=== 0 ? true : false}/>
                    <label className='itemGift' htmlFor={ele.id} onClick={() => this.chooseGift(ele)} >{ele.text}</label>
                  </div>
                )
              }
               <br/>
            <input
              type='number'
              className='inputCount'
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
