
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header';
import moment from 'moment';
import { loremIpsum  } from 'react-lorem-ipsum';
import text from '../lib/data';





type Props = {
    query : Article 
    LoremIpsum : string
}

function article({query}: Props) {


    const router = useRouter()
    const article : any  = router.query



    const a = Math.floor(Math.random() * text.length);

    console.log(a);
    
  return (
    <>
    <Header />
    <article className='max-w-7xl mx-auto'>
            <section className='mt-2 '>
                <div className='flex flex-col px-6 md:px-2 space-y-4 mb-4'>
                    <h2 className=' font-sans font-bold  items-center'>Category : <span className='uppercase font-sans items-center'> {article.category}  </span> </h2>
                    <h2 className='text-2xl font-semibold md:text-3xl lg:text-5xl font-serif '>{article.title}</h2>
                    <h2 className='text-xl font-medium truncate '>{article.description}</h2>
                    <div className='flex flex-row justify-between px-2 md:px-4'>
                        <div className='flex flex-row flex-wrap space-x-4 divide-x-2 gap-3'>
                            <h3 className='font-medium '><span>Author: </span>{article.author}</h3>
                            <h3 className='font-medium pl-2'><span>Source: </span>{article.source}</h3>
                            <h3 className='font-medium pl-2'>Language: <span className='uppercase'> {article.language}</span></h3>
                        </div>
                        <div>
                             <p className='font-medium '>{moment(article.published_at).format("MMM Do YY")}</p>
                        </div>
                    </div>
                </div>
                <div>    
                    {article.image && (
                        <img 
                            src={article.image}
                            alt={article.title}
                            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"  
                        />
                    )}
                </div>

                <div className='my-6 px-6'>
                    <p className='font-sans font-medium'>{article.description}{text}</p>
                    <p className='font-sans mt-1 text-justify font-medium'>{article.description}{text}</p>

                </div>


                <div>
                </div>
            </section>
    </article>
    </>
  )
}

export default article