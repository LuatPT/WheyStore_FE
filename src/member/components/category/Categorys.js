import React from 'react'
import CategoryContainer from '../../containers/category/CategoryContainer'
class Categorys extends React.Component {
  componentDidMount = () => {
    const { ListCateActions } = this.props;
    ListCateActions.getCategorysAction();
  }
  render() {
    return (
      <div className="divCategory" >
        <CategoryContainer />
      </div>
    )
  }
}
export default Categorys