"use client";

import React from 'react'
import {categories} from "../constants/index"
import Navlink from './Navlink'
import { usePathname } from 'next/navigation';

type Props = {}

const category = ["business", "finance", "sports", "tech", "commerce"]

function Navbar({}: Props) {

    const pathname = usePathname()
    
    const isActive = (path : string) => {
        return pathname?.split("/").pop() === path
    }
    
  return (
    <div className='grid grid-cols-3 my-2 mx-1 items-center  gap-4 md:mx-16 md:grid-cols-7 text-xs md:text-sm'>
        {categories.map((category) => (
            <Navlink key={category} category={category} isActive={isActive(category)} />
        ))}
    </div>
  )
}

export default Navbar