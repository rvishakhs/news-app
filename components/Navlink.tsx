import Link from 'next/link'
import React from 'react'

type Props = {
    category : string
    isActive: boolean
}

function Navlink({category, isActive}: Props) {
  return (
      <div className='grid grid-cols-4 md:grid-col-7'>
        <Link
            href={`/${category}`}
            className={`navlinks ${isActive && "underline decoration-blue-400 underline-offset-4 text-lg"} `}  
        >
                {category}
        </Link>
             

    </div>
  )
}

export default Navlink