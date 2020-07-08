import React from 'react';
import CateElementContainer from '../../container/category/CateElementContainer';
import AddCateAdm from '../../container/category/AddCateAdm';

class CateManager extends React.Component {
  componentDidMount = () => {
    this.props.GetListCategory.getCategorysAction();
  }
  render() {
    const { listCate } = this.props;

    return (
      <div className="cateManager row">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Category ID </th>
              <th>Category Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listCate.map((ele, key) =>
              < CateElementContainer {...ele} key={ele.category_id} />
            )}
            <AddCateAdm />
          </tbody>
        </table>
      </div>
    );
  }
}
export default CateManager