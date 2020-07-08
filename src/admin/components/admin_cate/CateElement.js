import React from 'react';

class CateElement extends React.Component {
  constructor(props) {
    super(props);
    const ele = this.props;
    this.state = ({
      currentCateName: ele.category_name,
      currentStatus: Number(ele.category_status)
    })
  }
  deleteCate = (ele) => {
    const { DeleteCategory } = this.props;
    DeleteCategory.deleteCateAction(ele.category_id);
  }
  updateCate = () => {
    const ele = this.props;
    const { UpdateCategory } = this.props;
    let obj = {
      category_id: ele.category_id,
      category_name: this.state.currentCateName,
      category_status: this.state.currentStatus
    }
    UpdateCategory.updateCateAction(obj);
  }

  changeName = (event) => {
    this.setState({
      currentCateName: event.target.value
    })
  }
  toggleStatus = () => {
    if (Number(this.state.currentStatus) === 1) {
      this.setState({
        currentStatus: 0
      })
    } else {
      this.setState({
        currentStatus: 1
      })
    }
  }
  render() {
    const ele = this.props;
    return (
      <tr >
        <td>{ele.category_id}</td>
        <td>
          <input type="text" value={this.state.currentCateName} onChange={this.changeName} />
        </td>
        <td>
          <label className="switch">
            <input type="checkbox" defaultChecked={this.state.currentStatus === 0 ? true : false} onChange={() => this.toggleStatus()} />
            <span className="slider round"></span>
          </label>
        </td>
        <td>
          <span className='btnEdit' onClick={() => this.updateCate()} >
            <svg className='bi bi-pencil-square' width='1.5em' height='1.5em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
              <path fillRule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />
            </svg>
          </span>
          <span className='btnDelete' onClick={() => this.deleteCate(ele)}>
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
export default CateElement