import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchResults from './SearchResults'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([])
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`)
        const { results } = await res.json()
        setSearchResults(results)
      }
    }

    getResults()
  }, [searchTerm])

  return (
    <div className='relative p-4'>
      <div className='container'>
        <div className='relative text-gray-600 w-72'>
          <form>
            <input
              type='search'
              name='search'
              id='search'
              className='bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72 border border-gray-400'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search Posts...'
            />

            <FaSearch className='absolute top-0 right-0 text-black mt-3 mr-4' />
          </form>
        </div>
      </div>

      <SearchResults results={searchResults} />
    </div>
  )
}
