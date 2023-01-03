

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Newssection from '../components/Newssection'
import fetchnews from '../lib/fetchnews'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import searching from '../lib/search';
import router from 'next/dist/server/router';
import Head from 'next/head'



type Props = {
    news : Article 
    LoremIpsum : string
}



function search({news}: Props) {

    const router = useRouter()
    const query = router.query.q
    const querykeyword = JSON.stringify(query)

    let datanews = "india "

    console.log(querykeyword);
    

    useEffect(()=> {
        const searchdata =  searching(datanews)      

    },[])


  return (
    <>
      <Head>
        <title>TBB | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <div className='max-w-6xl  mx-auto px-4 '>
            <Newssection allnews={news} />
      </div>
    </>
  )
}

export default search


export async function getStaticProps() {
    

    const searchresult : Article[] = await fetchnews("","india",true); 

    return {
      props : {
        news : searchresult
      }
    }
}

  