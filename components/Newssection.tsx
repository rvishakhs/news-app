import React from 'react'
import { categories } from '../constants'
import fetchnews from '../lib/fetchnews'

type Props = {}

async function  Newssection  ({}: Props) {

  const news: NewsResponse = await fetchnews("business","tech")

  return (
    <div>
        <p>Haio</p>
    </div>
  )
}

export default Newssection