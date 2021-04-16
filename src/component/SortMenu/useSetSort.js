import { useState, useEffect } from 'react'

const options = {
  dateDesc: 'Release Date - By Newest',
  dateAsc: 'Release Date - By Oldest',
  titleAsc: 'A - Z',
  titleDesc: 'Z - A'
}

const useSetSort = ({ sortOrder }) => {
  const [sortOption, setSortOption] = useState('')

  useEffect(() => {
    setSortOption(options[sortOrder] ? options[sortOrder] : 'No Option')
  }, [sortOrder])

  return { sortOption, options }
}

export default useSetSort
