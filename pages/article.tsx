

import React from 'react'
import { notFound } from 'next/navigation'
import Header from '../components/Header';


type Props = {
    searchParams? : Article 
}

function article({searchParams}: Props) {



    // if (
    // (searchParams && Object.entries(searchParams).length ===0) || 
    // !searchParams 
    // ) {
    //     return notFound()
    // }

    const article : Article = searchParams  
    
    console.log(article);
    
  return (
    <article>
        <Header />
            <section>
                {article.image && (
                    <img 
                        src={article.image}
                        alt={article.title}
                        className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"  
                    />
                )}
            </section>
    </article>
  )
}

export default article