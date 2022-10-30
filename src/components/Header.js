import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='leftSide'>
        <p>Hacker News</p>
      </div>
      <div className='rightSide'>
        <Link to='/top' className='navLink'>top</Link>
        |
        <Link to='/new' className='navLink'>new</Link>
        |
        <Link to='/submit' className='navLink'>submit</Link>
      </div>
    </div>
  )
}

export default Header