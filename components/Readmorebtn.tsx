import React from 'react'
import { useRouter } from 'next/router'

type Props = {
    article : Article
}

function Readmorebtn({article}: Props) {

    const router = useRouter()



    const handlebtn = () => {
        const querymaker = Object.entries(article)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")

    const url =`/article?${querymaker}`
    console.log(url);
    
    router.push(url)

    }



  return (
    <button 
        className='px-2 w-3/4 mx-auto md:w-full rounded-md border border-gray-500 py-2 font-semibold'
        onClick={handlebtn}
    >
    Read more
    </button>

  )
}

export default Readmorebtn