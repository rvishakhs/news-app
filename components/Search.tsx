import React from 'react'

type Props = {}

function Search({}: Props) {
  return (
    <form className='flex max-w-6xl mx-auto justify-between items-center px-5'>
        <input
            type='text'
            placeholder='Search keyword....'
            className='w-full h-14 rounded-sm outline-none placeholder-gray-500 text-gray-500 flex-1 bg-transparent dark:text-blue-400'
        />
        <button type='submit'>Search</button>
    </form>
  )
}

export default Search