import { useRouter } from 'next/navigation'
import React, { FormEvent,  useState } from 'react'

type Props = {}

function Search({}: Props) {

    const [input, setInput] = useState("")
    const router = useRouter()

    const handlesearch = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!input) return

        router.push(`/search?q=${input}`)

    }
    
  return (

    <form 
        onSubmit={handlesearch}
        className='flex max-w-6xl mx-auto justify-between border-t border-gray-300 items-center px-5'
    >
        <input
            type='text'
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            placeholder='Search keyword....'
            className='w-full h-14 rounded-sm outline-none font-medium placeholder-gray-500 text-gray-500 flex-1 bg-transparent dark:text-blue-400'
        />
        <button type='submit' disabled={!input} className='font-bold'>Search</button>
    </form>
  )
}

export default Search