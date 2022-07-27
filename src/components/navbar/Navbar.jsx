import React, {useState} from 'react'
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#whatYamics">What is YAMICS</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blogs">Library</a></p>
  </>
)

const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = useState(false)

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-logo">
          <h2 className='logo-text'>YAMIC-S</h2>
        </div>
        <div className='navbar-links-con'>
         <Menu />
        </div>
      </div>
      <div className="navbar-signin">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="navbar-menu">
        {
          toggleMenu ? <RiCloseLine color='#FFF' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#FFF' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className='navbar-menu-con scale-up-center'>
              <div className="navbar-menu-links">
                <Menu />
                <div className="navbar-menu-con-signin">
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar