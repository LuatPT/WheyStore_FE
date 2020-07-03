import React from 'react';
import moment from 'moment';
class ProductElement extends React.Component {
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
      product_endsale: this.product_endsale.current.value,
    }
    UpdateProduct.updateProductAction(eleUpdate);
  }
  deleteProduct = (ele) => {
    const { DeleteProduct } = this.props;
    DeleteProduct.deleteProductAction(
      { product_id: ele.product_id }
    )

  }
  render() {
    const { key } = this.props;
    const ele = this.props;
    return (
      <tr key={key}>
        <td>{ele.product_id}</td>
        <td>
          <input type='text' defaultValue={ele.product_name} ref={this.product_name} />
        </td>
        <td> <input type='text' defaultValue={ele.category_id} ref={this.category_id} /></td>
        <td >
          <img src={ele.product_img} alt="..." width="150px" height="150px" />
        </td>
        <td className="noteProduct"> <textarea rows="6" defaultValue={ele.product_note} ref={this.product_note} /></td>
        <td >
          <input type='text' defaultValue={ele.product_price}
            ref={this.product_price}
          />
        </td>
        <td >
          <input type='text'
            defaultValue={ele.product_sale}
            ref={this.product_sale} />
        </td>
        <td className="endSaleProduct" >
          <input type='date'
            defaultValue={moment(ele.product_endsale).format("YYYY-MM-DD")}
            ref={this.product_endsale} />
        </td>
        <td>
          <span className='btnEdit' onClick={() => this.updateProduct(ele)}>
            <svg className='bi bi-pencil-square' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
              <path fillRule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />
            </svg>
          </span>
          <span className='btnDelete' onClick={() => this.deleteProduct(ele)}>
            <svg className='bi bi-x-square' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
              <pat fillRule='evenodd' d='M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z' />
              <path fillRule='evenodd' d='M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z' />
            </svg>
          </span>
        </td>
      </tr>
    );
  }
}

export default ProductElement