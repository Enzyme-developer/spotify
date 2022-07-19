import React from 'react'
import { MdOutlineShortText } from 'react-icons/md'

const Search = ({search , setSearch}) => {
  return (
    <div>
      {/* //container for search button and input */}
      <div className=' rounded-full border-2 overflow-hidden border-[#333333] py-3 max-w-[1000px] bg-[#1a1a1a] px-5 pr-8 flex items-center' >
        
        <div className='h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse cursor-pointer' />

        {/* Input Field */}
        <input
          type="text"
          placeholder='search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='text-white border-none bg-[#1a1a1a] md:w-full focus:ring-0 outline-none placeholder:text-[#fafafa] text-sm'
        />

        <div className='flex items-center space-x-1.5 text-[#cecece] pl-10 cursor-pointer'>
          <MdOutlineShortText className='text-2xl animate-pulse' />
          <span className='font-medium text-sm'>Filters</span>
        </div>        

      </div>

      

    </div>
  )
}

export default Search