import React from 'react';
import ProductsContainer from '../containers/ProductsContainer';
class ListProducts extends React.Component {
  componentDidMount = () => {
    const { ListProductActions } = this.props;
    ListProductActions.getProductsAction();
  };
  render() {
    const { listProduct, keyWord } = this.props;
    let arr = listProduct.filter(
      (ele) =>
        ele.product_name.toLowerCase().includes(keyWord.toLowerCase()) === true
    );
    return (
      <div className='divListProducts row'>
        {arr.map((ele, key) => (
          <ProductsContainer {...ele} key={key} />
        ))}
      </div>
    );
  }
}
export default ListProducts;
