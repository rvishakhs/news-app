

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



function technology({news}: Props) {

    // const [data, setdata] = useState()
    // const router = useRouter()
    // const query : any  = router.query.q
    // const querystring = JSON.stringify(query)

    
    // const getdata = async () => {
    //     const searchresult : Article[] = await fetchnews("","india",true);
    //     console.log(searchresult);
        
    // }

    // useEffect(()=> {
    //     getdata()
    // }, [])




    
    
  return (
    <>
      <Head>
        <title>TBB | Technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <div className='max-w-6xl  mx-auto px-4 '>
            <Newssection allnews={news} />
      </div>
    </>
  )
}

export default technology


export async function getStaticProps() {
    

    const searchresult : Article[] = await fetchnews("technology","",true); 

    return {
      props : {
        news : searchresult
      }
    }
}

  