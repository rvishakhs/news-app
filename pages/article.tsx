
import { useRouter } from 'next/router'
import React from 'react'
import { notFound } from 'next/navigation'
import Header from '../components/Header';


type Props = {
    query : Article 
}

function article({query}: Props) {


    const router = useRouter()
    const article : any  = router.query

    
    // if (
    // (searchParams && Object.entries(searchParams).length ===0) || 
    // !searchParams 
    // ) {
    //     return notFound()
    // }

    
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

                <div>
                    <h2>{article.title}</h2>
                    <h2>{article.description}</h2>
                </div>
            </section>
    </article>
  )
}

export default article