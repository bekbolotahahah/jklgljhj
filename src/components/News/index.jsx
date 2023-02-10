import React from 'react'

import { news } from '../../helpers/fake-backend'

import NewsCard from './cardNews'





const News = () => {

  return (

    <div className="News__Slide">
      <div className='just__news'>
        {
          news.slice(0, 3).map(item => (
            <NewsCard
              key={item.id}
              image={item.image}
              title={item.title}
              doit={item.doit}
            />
          ))
        }
      </div>
    </div>
  )
}

export default News;    