"use client";

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Newssection from '../components/Newssection'
import fetchnews from '../lib/fetchnews'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'


type Props = {
    news : Article 
    LoremIpsum : string


}

// async function searching() {            
//     const router = useRouter()
//     const searchvalue  = router.query.q
//     const searchresult = JSON.stringify(searchvalue)
//     return searchresult
// }

    let searchkey : any

function search({news}: Props) {

    const [value, setvalue] = useState()

    const router = useRouter()
    searchkey  = router.query.q
    
    useEffect(() => {

        searching()
    }, [])

    console.log(searchkey);
    

    
  return (
    <>
        <Header />
        <div className='max-w-6xl  mx-auto px-4 '>
            {/* <Newssection allnews={news} /> */}
      </div>
    </>
  )
}

export default search


export async function searching() {

    const data =  JSON.stringify(searchkey)

    console.log(data);
    
    const news : Article[] = await fetchnews("","india",true);
    return {
      props : {
        news : news
      }
    }
}
  