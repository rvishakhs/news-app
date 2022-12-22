import React from 'react'
import { BiMenu } from "react-icons/bi";
import Navbar from './Navbar';
import Link from 'next/link'
import Search from './Search';

function Header() {
  return (
    <header className='md:px-16 px-6 md:py-6 py-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 items-center'>
            <BiMenu className="h-9 w-9 " />
            <Link href="/">            
                    <p className='font-serif md:text-3xl sm:items-start text-2xl md:items-center font-normal'>The Better  {" "}<span className='underline decoration-5 hover:decoration-orange-500 decoration-blue-500'>Bulletins</span></p>
            </Link>
            <div className='hidden md:flex justify-end items-center'>
                {/* Night mode */}
                <button className='px-5 py-3 rounded-full border border-black hover:bg-white hover:text-black bg-black text-white font-semibold text-base'>
                    Subscribe Now
                </button>
            </div>
        </div>
        {/* Nav bar */}
        <Navbar />
        {/* Search box */}
        <Search />
    </header>
  )
}

export default Header