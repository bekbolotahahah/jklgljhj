import React, { useState, useEffect } from 'react'
import { cups as cups_list } from '../../helpers/fake-backend'
import CatalogCard from '../CatalogCard/inde'
import Modall from './Modal/modal'
import Pogination from '../Pagination'
import CupsContext from '../../context/CupsContext'
import { Link } from 'react-router-dom'


const Catalog = (props) => {

  const { setCartItems, cartItems } = props

  const [show, setShow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cupsPerPage] = useState(16)
  const [cups, setCups] = useState(cups_list)
  const [cupsFilter, setFilter] = useState(null)


  useEffect(() => {
    if (cupsFilter !== null) {
      let temp = [...cups].sort((a, b) => a[cupsFilter.value] - b[cupsFilter.value])
      if (cupsFilter.isReverse) temp.reverse()
      setCups(temp)
      setCurrentPage(1)
    } else setCups(cups_list)
  }, [cupsFilter])

  const lustCupsIndex = currentPage * cupsPerPage
  const firstCupsIndex = lustCupsIndex - cupsPerPage
  const currentCup = cups.slice(firstCupsIndex, lustCupsIndex)

  const pagineyt = pageNumber => setCurrentPage(pageNumber)


  return (
    <CupsContext.Provider value={{ cups, setCups, cupsFilter, setFilter }}>
      <div className='top__pogination'>
        <div>
          <ul className='one__top_poginstion'>
            <li> <Link to='/home-page'>Главная</Link> </li>
            <li>{'>'}</li>
            <li className='ylow__top__pogination'>Каталог</li>
          </ul>
        </div>
        <div>

        </div>
      </div>
      <div className='catalog'>
        <div className='catalog__page'></div>
        <div className='catalog__all_2'>
          <div className="filter__catalog">

            <div></div>
            <div className='filter__cat_block' onClick={() => setShow(prev => !prev)}>
              <li >Сортировка</li> <Modall show={show} />
              <li className='icon__filter'></li>
            </div>
          </div>

          <div className='catalog__all'>
            {


              currentCup.map(item => (
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
            }


          </div>
        </div>
        <Pogination
          cupsPerPage={cupsPerPage}
          totalCups={cups.length}
          pagineyt={pagineyt}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}

        />

      </div>
    </CupsContext.Provider>


  )
}

export default Catalog;  