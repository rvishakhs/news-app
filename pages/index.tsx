import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Newssection from '../components/Newssection'
import { categories } from '../constants'
import Fetchnews from '../lib/Fetchnews'

type Props = {
  news : any
}


const  Home = async ({}: Props) => {

  const news: NewsResponse = await Fetchnews(categories.join(","),"news", true)

  console.log(news);
  
  
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
      <Head>
        <title>The Better Bulletins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='max-w-6xl mx-auto px-4 '>
        <Newssection />
      </div>
    </div>
  )
}

export default Home


// export const getServerSideProps  = async () => {

//   const news : any = await Fetchnews();

//   return {
//     props : {
//         news
//     }
//   }

// }
