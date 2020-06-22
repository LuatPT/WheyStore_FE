import React from 'react';
import ProductsContainer from '../containers/ProductsContainer';
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
      per_page: 3,
    });
  };

  componentDidMount = () => {
    const { ListProductActions } = this.props;
    ListProductActions.getProductsAction({
      page: this.state.activePage,
      per_page: 3,
    });
  };
  render() {
    const { listProduct, keyWord, total } = this.props;
    let arr = listProduct.filter(
      (ele) =>
        ele.product_name.toLowerCase().includes(keyWord.toLowerCase()) === true
    );
    return (
      <div>
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
            itemsCountPerPage={3}
            totalItemsCount={total}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
export default ListProducts;
