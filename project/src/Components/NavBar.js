
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
                    <img src='data:image/jpeg;base64,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' alt='loading' />
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


