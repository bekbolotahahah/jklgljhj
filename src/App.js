import React, {useEffect, useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../src/pages/homePage';
import CartPage from '../src/pages/cartPage';
import CatalogPage from '../src/pages/catalogPage';
import Header from '../src/components/Header';
import DetailsPage from '../src/pages/detailsPage'
import SearchPage from './pages/searchPage';
import {filterCaps} from './helpers/functions'
import {cups}  from './helpers/fake-backend';



const App = () => {
  
  const [value , setValue] = useState('')
  const [FiltredCups, setFilteredCups] = useState([])
  const[loading, setLoading] = useState(false)
  const[cartItems,setCartItems] = useState([])
  const[DeteylItems,setDeteylItems] = useState([])


const onAdd = (cups) => {
setCartItems(prev => [...prev, {id: 0, }])
}
const onAddDetyl = (cups) => {
  setDeteylItems(prev => [...prev, {id: 0, }])
  }

  useEffect(() => {
    setFilteredCups(filterCaps(cups, value))
  }, [value])

  return (
    <main className='container' role="main">
      <Header value={value} setValue={setValue} countCartItems={cartItems.length}/>
      <Routes>
        <Route path='/' element={<Navigate to="/home-page" replace />} />
        <Route path='/home-page' element={<HomePage  onAddDetyl={onAddDetyl} setDeteylItems={setDeteylItems} searchedData={FiltredCups}  DeteylItems={DeteylItems}/>}  />
        <Route path='/cart' element={<CartPage  onAdd={onAdd} cartItems={cartItems} SetCartItems={setCartItems}/>}  />
        <Route path='/catalog' element={<CatalogPage cartItems={cartItems} setCartItems={setCartItems}  onAdd={onAdd} searchedData={FiltredCups} loading={loading} setLoading={setLoading}/>} />
        <Route path='/details/:id' element={<DetailsPage onAdd={onAdd} cartItems={cartItems}/>} />
        <Route path='/SearchPage' element={<SearchPage searchedData={FiltredCups} setCartItems={setCartItems}  onAdd={onAdd} />} />
      </Routes>
  
    
    </main>
  );
}

export default App;






