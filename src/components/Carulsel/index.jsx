import React, { cloneElement } from 'react'
import { useEffect, useState, Children } from 'react'

const PAGE_WIDTH = 700

const Carusel = ({ children }) => {
const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handLeftArrowClick = () => {
        
        setOffset((curentOffset) => {
            const newOffset = curentOffset + PAGE_WIDTH
            return newOffset 
        })
    }
    const HandRigthClick = () => {
        console.log('rith');
        setOffset((curentOffset) => {
            const newOffset = curentOffset - PAGE_WIDTH
            const maxOffset = (PAGE_WIDTH * (pages.length - 1))
            return  newOffset
        })
    }



    
    useEffect(() => {
        setPages(Children.map(children, child => {
            return cloneElement(child, {
                style: {
                    height: '100%',
                    MinWidth: `${PAGE_WIDTH}px`,
                    MaxWidth: `${PAGE_WIDTH}px`,
                }
            })
        }))

    }, [])


    return (
<>
<div className='top__sailers'><h1>TOP SELLERS</h1></div>
        <div className='reletive__cont'>
       
            <div className='carusel__conteyner' >   

                <div className='slide__left' onClick={handLeftArrowClick}></div>
                <div className="carusel__window">
                    <div className="carusell__blur"></div>
                    <div className="all__items__conteyner"
                        style={{
                            transform: `translateX(${offset}px)`
                        }}
                    >
                        {pages}

                    </div>
                </div>
                <div className='slide__riht' onClick={HandRigthClick}></div>

            </div>
        </div></>
    )
}

export default Carusel