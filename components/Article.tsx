import moment from 'moment'
import React from 'react'
import Readmorebtn from './Readmorebtn'

type Props = {
    news: any
}

export default function Article({news}: Props) {
  return (
    <article className='mt-2 bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg p-6 md:p-4 lg:p-2  hover:bg-slate-200 transition-all duration-200 ease-out'>
        {news.image && (
            <img 
                src={news.image}
                alt={news.title}
                className="h-56 w-full object-cover rounded-t-lg shadow-md"
            />
        )}
        <div className='flex flex-1 flex-col'>
          <div className='flex flex-1 flex-col p-4'>
            <h2 className='font-bold font-serif line-clamp-2'>{news.title}</h2>
            <section className='mt-3 flex-1'>
              <p className=' text-sm line-clamp-3'>{news.description}</p>

            </section>
            <footer className='flex mt-2 justify-between '>
              <p className='font-medium'>{news.author}</p>
              <p className='font-medium text-xs'>{moment(news.published_at).format("MMM Do YY")}</p>
            </footer>

            <div className='flex mt-2 w-full mx-auto'>
              <Readmorebtn article={news} />
            </div>
          </div>
        </div>
    </article>
  )
}