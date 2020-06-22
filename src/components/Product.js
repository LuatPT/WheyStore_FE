import React from 'react';
import DetailContainer from '../containers/DetailContainer';
import { Route } from 'react-router-dom';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showDetail = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const ele = this.props;
    const salePrice = (ele.product_price * (100 - ele.product_sale)) / 100;
    let url = '/detail/' + ele.product_id;
    return (
      <div className='card divProduct col-md-2'>
        <img
          className='card-img-top imgProduct'
          src={ele.product_img}
          alt='Ok'
        />
        <div className='card-body'>
          <p className='pProduct'>{ele.product_name}</p>
          <p
            className='pProduct'
            style={{ textDecoration: 'line-through', color: 'gray' }}
          >
            {ele.product_price.toLocaleString('it-IT', {
              style: 'currency',
              currency: 'VND',
            })}
          </p>
          <p className='pProduct'>
            {salePrice.toLocaleString('it-IT', {
              style: 'currency',
              currency: 'VND',
            })}
          </p>
          <button className='btn btn-primary' onClick={() => this.showDetail()}>
            <a href={url} className="seeProfile">See Profile</a>
          </button>
        </div>
      </div>
    );
  }
}
export default Product;
