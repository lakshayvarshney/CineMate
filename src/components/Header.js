import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <div className='container'>
            <div className='title'>
                <Link to='/' className='link'>Cine<span>M</span>ate</Link>
            </div>
           
                
                <ul>
                    <li><Link to="/popular">Popular</Link></li>
                    <li><Link to='/toprated'>TopRated</Link></li>
                    <li><Link to='/upcoming'>Upcoming</Link></li>
                </ul>
                </div>
            
        
    </>
  )
}

export default Header
