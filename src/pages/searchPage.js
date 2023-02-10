import React from 'react';
import Footer from '../components/Footer';
import SearchResult from '../components/SerchResault';

const SearchPage = ({searchedData, onAdd, setCartItems}) => {
  return (
    <div>

      <SearchResult searchedData={searchedData}
       onAdd={onAdd}
       setCartItems={setCartItems}/>
      <Footer/>
    </div>
  )
}

export default SearchPage;