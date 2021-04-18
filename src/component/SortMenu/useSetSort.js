import { useState, useEffect } from 'react'

const options = {
  dateDesc: 'Release Date - By Newest',
  dateAsc: 'Release Date - By Oldest',
  titleAsc: 'A - Z',
  titleDesc: 'Z - A',
  wishlist: 'Items in My Wishlist'
}

const useSetSort = ({ sortOrder }) => {
  /**
   * Description: Create sortOrder hook
   * @param {string} sortOrder key for options object map
   * @return {object} Object map containing sortOption string and object map of
   * sortOption text
  */
  const [sortOption, setSortOption] = useState('')

  const updateSortOption = () => {
  /**
   * Description: update sortOption state to corresponding value from options
   * object map or set state to 'No Option' if sortOrder key doesn't exist in
   * options object map
   * @return {null}
  */
    setSortOption(options[sortOrder] ? options[sortOrder] : 'No Option')
  }

  useEffect(() => {
    updateSortOption()
  }, [sortOrder])

  return { sortOption, options }
}

export default useSetSort
