import React from 'react'
import './searchBarStyle.scss'
import SearchGlass from '../../assets/search-glass.svg'
import useSearch from './useSearch'
import PropTypes from 'prop-types'

const SearchBar = ({ searchMovies, search, setSearch }) => {
  const {
    handleSubmit,
    handleUpdateSearch
  } = useSearch({ searchMovies, search, setSearch })
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='offset-md-8 col-md-4'>
          <form className='search' onSubmit={handleSubmit}>
            <input type='text' className='search__bar' value={search} onChange={handleUpdateSearch} />
            <button className='search__submit' type='submit'>
              <img src={SearchGlass} alt='Search Glass' className='search__icon' />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
SearchBar.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired
}

export default SearchBar
