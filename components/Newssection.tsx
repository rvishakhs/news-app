import React, {useState, useEffect} from 'react'
import { categories } from '../constants'
import fetchnews from '../lib/fetchnews'

type Props = {}

function  Newssection  ({}: Props) {

  let [news, setnews] =  useState({})

  useEffect ( () => {

     async function getnews() {
      try {
        const res = await fetchnews("business","tech")
          setnews(res)
        console.log(res);
      } catch (err) {
        console.log(err);
    }
       
    }      


     getnews()

     
  }, [])
  


  console.log(news)

  return (
    <div>
        
    </div>
  )
}

export {Newssection}