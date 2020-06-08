import React from 'react';
class Search extends React.Component {
  search = (eve) => {
    const { SearchActions } = this.props;
    SearchActions.searchAction(eve.target.value);
  };
  render() {
    const { keySearch } = this.props;
    return (
      <div className='divSearch'>
        <input
          type='text'
          className='inputSearch'
          placeholder='Tìm kiếm ...'
          onChange={this.search}
          value={keySearch}
        />
      </div>
    );
  }
}
export default Search;
