import React from 'react'
import Article from './Article'


type Props = {
    allnews : Article
  }

function Newssection({allnews}: Props) {


    

    
  return (
    <main>
        {allnews.map((article : any) => (
            <Article key={article.title} news={article} />
        ))}
    </main>
  )
}

export default Newssection