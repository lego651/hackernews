import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='leftSide'> 
        <Link to='/' className='navLink'>Hacker News</Link>
      </div>
      <div className='rightSide'>
        <Link to='/new' className='navLink'>new</Link>
        |
        <Link to='/top' className='navLink'>top</Link>
        |
        <Link to='/submit' className='navLink'>submit</Link>
      </div>
    </div>
  )
}

export default Header