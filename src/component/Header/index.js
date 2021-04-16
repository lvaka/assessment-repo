import * as React from 'react'
import './styles.css'
import logo from '../../assets/these-movies-here.svg'

const Header = () => (
  <header className='header'>
    <img className='header-logo' src={logo} alt='These Movies Here' />
  </header>
)

export default Header
