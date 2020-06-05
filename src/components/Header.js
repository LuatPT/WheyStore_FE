import React from 'react'
import Banner from './Banner'
import SearchContainer from '../containers/SearchContainer'
import ListCateContainer from '../containers/ListCateContainer'
const Header = () => {
  return (
    <div className="divHeader">
      <SearchContainer />
      <ListCateContainer />
      <Banner />
    </div>
  )
}
export default Header