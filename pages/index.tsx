import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Newssection from '../components/Newssection'
import { categories } from '../constants'
import fetchnews from '../lib/fetchnews'


type Props = {
  news : any
}


const  Home = async ({}: Props) => {

  
  
  
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

