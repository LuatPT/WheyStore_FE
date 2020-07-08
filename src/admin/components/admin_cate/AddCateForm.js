import React from 'react'

class AddCateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      categoryName: ""
    })
  }
  handleChange = (event) => {
    this.setState({
      categoryName: event.target.value
    })
  }
  addNewCate = () => {
    const { AddCate } = this.props;
    let obj = {
      category_name: this.state.categoryName,
      category_status: 0
    }
    AddCate.addCateAction();
  }
  render() {
    return (
      <tr className="addCateForm" >
        < td >Add New Category</td >
        <td>
          <input type="text" placeholder="Category name..." onChange={this.handleChange} />
        </td>
        <td>
          <input type="text" placeholder="Category status..." />
        </td>
        <td>
          <button className="btn btn-success col-md-4" onClick={() => this.addNewCate()}>Add</button>
        </td>
      </tr >
    );
  }
}
export default AddCateForm