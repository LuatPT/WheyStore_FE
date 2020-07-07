import React from 'react';
import moment from 'moment';
function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}
class UpdateProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.product_name = React.createRef();
    this.category_id = React.createRef();
    this.product_img = React.createRef();
    this.product_note = React.createRef();
    this.product_price = React.createRef();
    this.product_sale = React.createRef();
    this.product_endsale = React.createRef();
  }
  componentDidMount = () => {
    const { ShowUpdateProduct } = this.props;
    ShowUpdateProduct.showDetailProduct({ product_id: this.props.product_id });
  }
  updateProduct = (ele) => {
    const { UpdateProduct } = this.props;
    const eleUpdate = {
      product_id: ele.product_id,
      product_name: this.product_name.current.value,
      category_id: Number(this.category_id.current.value),
      product_img: ele.product_img,
      product_note: this.product_note.current.value,
      product_price: Number(this.product_price.current.value),
      product_sale: Number(this.product_sale.current.value),
      product_endsale: formatDate(this.product_endsale.current.value),
    }
    UpdateProduct.updateProductAction(eleUpdate);
  }
  render() {
    const { product, key } = this.props;
    return (
      <div className="row" key={key}>
        <div className="col-md-5">
          <img src={product.product_img} alt="..." width="100%" height="100%" />
        </div>
        <div className="col-md-7">
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Product ID: </label>
            <span className="col-md-8">{product.product_id}</span>
          </div>
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Product Name: </label>
            <input type='text' className="col-md-8" defaultValue={product.product_name} ref={this.product_name} />
          </div>
          <div className="inline-flex row updateProductItem" >
            <label className="col-md-4">Category ID: </label>
            <input type='text' className="col-md-8" defaultValue={product.category_id} ref={this.category_id} />
          </div>
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Product Img: </label>
            <input type='text' className="col-md-8" defaultValue={product.product_img} ref={this.product_img} />
          </div>
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Product Note: </label>
            <input type='text' className="col-md-8" defaultValue={product.product_note} ref={this.product_note} />
          </div>
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Product Price: </label>
            <input type='text' className="col-md-8" defaultValue={product.product_price} ref={this.product_price} />
          </div>
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Product Sale: </label>
            <input type='text' className="col-md-8" defaultValue={product.product_sale} ref={this.product_sale} />
          </div>
          <div className="inline-flex row updateProductItem">
            <label className="col-md-4">Product EndSale: </label>
            <input type='text' className="col-md-8" defaultValue={product.product_endsale} ref={this.product_endsale} />
          </div>
          <button type="button" className="btn btn-warning" onClick={() => this.updateProduct(product)}>Update
            <span className='btnEdit' >
              <svg className='bi bi-pencil-square' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                <path fillRule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />
              </svg>
            </span>
          </button>
        </div>

      </div>
    );
  }
}

export default UpdateProductForm