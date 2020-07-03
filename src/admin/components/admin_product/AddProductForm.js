import React from 'react';
class AddProductForm extends React.Component {
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

  addProductNew = () => {
    const { AddProduct } = this.props;
    const element = {
      product_name: this.product_name.current.value,
      category_id: Number(this.category_id.current.value),
      product_img: this.product_img.current.value,
      product_note: this.product_note.current.value,
      product_price: Number(this.product_price.current.value),
      product_sale: Number(this.product_sale.current.value),
      product_endsale: this.product_endsale.current.value,
    }
    AddProduct.addProductAction(element);
  }
  render() {
    return (
      <tr>
        <td>
        </td>
        <td>
          <input type="text" ref={this.product_name} />
        </td>
        <td>
          <input type="text" ref={this.category_id} />
        </td>
        <td>
          <input type="text" ref={this.product_img} />
        </td>
        <td>
          <input type="text" ref={this.product_note} />
        </td>
        <td>
          <input type="text" ref={this.product_price} />
        </td>
        <td>
          <input type="text" ref={this.product_sale} />
        </td>
        <td>
          <input type="text" ref={this.product_endsale} />
        </td>
        <td>
          <span className="btnAddPro" onClick={() => this.addProductNew()}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-upload" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8zM5 4.854a.5.5 0 0 0 .707 0L8 2.56l2.293 2.293A.5.5 0 1 0 11 4.146L8.354 1.5a.5.5 0 0 0-.708 0L5 4.146a.5.5 0 0 0 0 .708z" />
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 2z" />
            </svg>
          </span>
        </td>
      </tr>
    );
  }
}
export default AddProductForm