import React from 'react'
import Article from './Article'


type Props = {
    allnews : Article
  }

function Newssection({allnews}: Props) { 
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {allnews.map((article : any) => (
            <Article key={article.title} news={article} />
        ))}
    </main>
  )
}

export default Newssection