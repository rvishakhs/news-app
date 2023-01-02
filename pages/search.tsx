"use client";

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Newssection from '../components/Newssection'
import fetchnews from '../lib/fetchnews'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import searching from '../lib/search';
import router from 'next/dist/server/router';



type Props = {
    news : Article 
    LoremIpsum : string
}



function search({news}: Props) {


    





    
    
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


export async function getStaticProps() {

    let newsdata : any

    // if (typeof window !== "undefined") {

        
    //     newsdata = data
        
    //     console.log(data);
        
    // }
    
    console.log(newsdata);
    
    let params = new URLSearchParams(window.location.search)  
    const data = params.get('q')


    

    const searchresult : Article[] = await fetchnews("","india",true); 

    return {
      props : {
        news : searchresult
      }
    }
}

  