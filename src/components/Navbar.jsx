import { Link } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {
  return (
    <div id='top-nav'>
        <div id='logo'>
            {/* img here */}
        </div>
        <div className='nav-items'>
            <Link to='/'> <h4> Home </h4> </Link> |
            <Link to='/projects'> <h4> Projects </h4> </Link>
        </div>
        
        </div>
  )
}

export default Navbar