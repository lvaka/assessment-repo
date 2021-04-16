import React, { useState, useRef } from 'react'
import './sortMenu.scss'
import useSetSort from './useSetSort'
import useHandleActivate from './useHandleActivate'
import useHandleHide from './useHandleHide'
import PropTypes from 'prop-types'

const SortMenu = ({ sortOrder, sortByReleaseDate, sortByTitle }) => {
  const sortOptionsRef = useRef()
  const [active, setActive] = useState(false)
  const { sortOption, options } = useSetSort({ sortOrder })
  const handleClick = useHandleActivate({ active, setActive })
  const { handleSortByDate, handleSortByTitle } = useHandleHide({ active, sortOptionsRef, sortByReleaseDate, sortByTitle, setActive })

  return (
    <div className='container-fluid'>
      <div className='sortmenu'>
        <div
          className={active ? 'sortmenu__selection sortmenu__selection--active' : 'sortmenu__selection'}
          onClick={handleClick}
        >
          {sortOption}
        </div>
        <ul className='sortmenu__options' ref={sortOptionsRef}>
          <li
            className={sortOrder === 'dateDesc' ? 'sortmenu__item sortmenu__item--active' : 'sortmenu__item'}
            onClick={() => handleSortByDate('desc')}
          >
            {options.dateDesc}
          </li>
          <li
            className={sortOrder === 'dateAsc' ? 'sortmenu__item sortmenu__item--active' : 'sortmenu__item'}
            onClick={() => handleSortByDate('asc')}
          >
            {options.dateAsc}
          </li>
          <li
            className={sortOrder === 'titleAsc' ? 'sortmenu__item sortmenu__item--active' : 'sortmenu__item'}
            onClick={() => handleSortByTitle('asc')}
          >
            {options.titleAsc}
          </li>
          <li
            className={sortOrder === 'titleDesc' ? 'sortmenu__item sortmenu__item--active' : 'sortmenu__item'}
            onClick={() => handleSortByTitle('desc')}
          >
            {options.titleDesc}
          </li>
        </ul>
      </div>
    </div>
  )
}
SortMenu.propTypes = {
  sortOrder: PropTypes.string,
  sortByTitle: PropTypes.func,
  sortByReleaseDate: PropTypes.func
}

export default SortMenu
