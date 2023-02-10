import React from 'react'
import { Link } from 'react-router-dom';
import CatalogCard from '../CatalogCard/inde';


const SearchResult = ({ searchedData, setCartItems,cartItems }) => {


  return (
    <div className='catalog__all_2'>
      <div className='top__pogination'>
        <div>
          <ul className='one__top_poginstion'>
            <li> <Link to='/home-page'>Главная</Link> </li>
            <li>{'>'}</li>
            <li className='ylow__top__pogination'>Поиск</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className='catalog__all'>
        {

          searchedData.length > 0 ?

            searchedData.slice(0, 8).map(item => (
              <CatalogCard
              count={item.count}
              id={item.id}
              key={item.id}
              brand={item.brand}
              cartItems={cartItems}
              image={item.image}
              modal={item.modal}
              price={item.price}
              description={item.description}
              setCartItems={setCartItems}
              size={item.size}

            />
            ))
            : <><div className='not__cup'></div>
              <h1 className='noy_cup_text'>По вашему запросу ничего не найдено</h1>

            </>
        }
      </div>

    </div>

  )
}

export default SearchResult;  