import React from 'react'
import Pagination from 'react-js-pagination';
import AddProductAdm from '../../container/product/AddProductAdm'
import UpdateProductAdm from '../../container/product/UpdateProductAdm';

class ProductManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };

  }
  componentDidMount = () => {
    const { GetProduct } = this.props;
    GetProduct.getProductsAction({
      page: this.state.activePage,
      per_page: 10,
    });
  };

  handlePageChange = (pageNumber) => {
    const { GetProduct } = this.props;
    this.setState({ activePage: pageNumber });
    GetProduct.getProductsAction({
      page: pageNumber,
      per_page: 10,
    });
  };

  render() {
    const { listProduct, total } = this.props;
    return (
      <div className="productAdmin ">
        <div className="productManager">
          <table className="table table-sm table-bordered">
            <thead>
              <tr>
                <th >Product_ID</th>
                <th >Product_Name</th>
                <th >Category_ID</th>
                <th >Product_Img</th>
                <th >Product_Note</th>
                <th >Product_Price</th>
                <th >Product_Sale</th>
                <th >Product_Endsale</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {listProduct.map((ele, key) => (
                <UpdateProductAdm {...ele} key={key} />
              ))}
              <AddProductAdm />
            </tbody>
          </table>
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
export default ProductManager