import React from 'react'
import './sortMenu.scss'

const SortMenu = () => {
  return (
    <div className='container-fluid'>
      <div className='sortmenu'>
        <div className='sortmenu__selection'>
          --
        </div>
        <ul className='sortmenu__options'>
          <li className='sortmenu__item'>Release Date - Newer First</li>
          <li className='sortmenu__item'>Release Date - Older First</li>
          <li className='sortmenu__item'>A - Z</li>
          <li className='sortmenu__item'>Z - A</li>
        </ul>
      </div>
    </div>
  )
}

export default SortMenu
