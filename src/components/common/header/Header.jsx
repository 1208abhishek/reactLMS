import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Digital Products</Link>
            </li>
            <li>
              <Link to='/about'>Mentor</Link>
            </li>
            <li>
              <Link to='/courses'>courses</Link>
            </li>
            <li>
              <Link to='/team'>Blogs</Link>
            </li>
            <li>
              <Link to='/pricing'>About Us</Link>
            </li>
            {/* <li>
              <Link to='/journal'></Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li> */}
          </ul>
          <div className='start'>
            <div className='button'>Login/Signup</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
