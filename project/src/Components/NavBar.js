
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className='navbar navbar-expand-lg bg-info navbar-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to="/">
                    Food Website 
                    
                </Link>
                
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/menu">
                                Menu
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar 


