import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { categories } from '../constants'
import fetchnews from '../lib/fetchnews'
import React, {useState, useEffect} from 'react'
import Newssection from '../components/Newssection'



type Props = {
  news : Article
}

const  Home =  ({news}: Props) => {


  // console.log(news);
  
 

  return (
    <div className="bg-gray-100 dark:bg-zinc-900  transition-all duration-700">
      <Head>
        <title>The Better Bulletins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='max-w-6xl  mx-auto px-4 '>
        <Newssection allnews={news} />
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps : GetServerSideProps = async() => {

  const news : Article[] = await fetchnews("" ,"")
  return {
    props : {
      news : news
    }
  }
}
