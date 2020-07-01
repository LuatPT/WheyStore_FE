import React from 'react';
import ProductsContainer from '../../containers/product/ProductsContainer';
import Pagination from 'react-js-pagination';
class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }
  handlePageChange = (pageNumber) => {
    const { ListProductActions } = this.props;
    this.setState({ activePage: pageNumber });
    ListProductActions.getProductsAction({
      page: pageNumber,
      per_page: 12,
    });
  };

  componentDidMount = () => {
    const { ListProductActions } = this.props;
    ListProductActions.getProductsAction({
      page: this.state.activePage,
      per_page: 15,
    });
  };
  render() {
    const { listProduct, keyWord, total, listProByCate } = this.props;
    let arr;
    if (listProByCate.length > 0) {
      arr = listProByCate.filter(
        (ele) =>
          ele.product_name.toLowerCase().includes(keyWord.toLowerCase()) === true
      );
    } else {
      arr = listProduct.filter(
        (ele) =>
          ele.product_name.toLowerCase().includes(keyWord.toLowerCase()) === true
      );
    }
    return (
      <div>
        <hr />
        <h3 className="h3Sale">Flash Sale</h3>
        <div className='divListProducts row'>
          {arr.map((ele, key) => (
            <ProductsContainer {...ele} key={key} />
          ))}
        </div>
        <div className='divPagi'>
          <Pagination
            itemClass='page-item'
            linkClass='page-link'
            activePage={this.state.activePage}
            itemsCountPerPage={15}
            totalItemsCount={total}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
export default ListProducts;
