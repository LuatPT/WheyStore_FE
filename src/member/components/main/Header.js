import React from 'react';
import Banner from './Banner';
import SearchContainer from '../../containers/product/SearchContainer';
import ListCateContainer from '../../containers/category/ListCateContainer';
const Header = () => {
  return (
    <div className='divHeader'>
      <SearchContainer />
      <ListCateContainer />
      <Banner />
    </div>
  );
};
export default Header;
