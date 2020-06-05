import React from 'react'
import ProductsContainer from '../containers/ProductsContainer'
import DetailProduct from './DetailProduct';
class ListProducts extends React.Component {
  componentDidMount = () => {
    const { ListProductActions } = this.props;
    ListProductActions.getProductsAction();
  }
  render() {
    const { listProduct } = this.props;
    return (
      <div className="divListProducts row" >
        {
          listProduct.map((ele, key) => (
            <ProductsContainer {...ele} key={key} />
          ))
        }

      </div>
    )
  }
}
export default ListProducts