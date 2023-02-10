import React from 'react';
import Footer from '../components/Footer';
import TopPartKP from '../components/TopPartKP';
import Catalog from '../components/Catalog/inde';
import FooterNav from '../components/FooterNav';



const CatalogPage = ({searchedData,onAdd,loading, setCartItems, cartItems} ) => {


  if(loading){
    return <h2>loading...</h2>
  }
  
  return (
    <div>
      <TopPartKP/>
      <Catalog onAdd={onAdd}
      setCartItems={setCartItems}
      cartItems={cartItems}
      searchedData={searchedData}
      />
      <FooterNav/>
      <Footer/>
    </div>

  )
}

export default CatalogPage;