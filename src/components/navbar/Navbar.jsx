import { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about-zrank">About</Link>
    </p>
    <p>
      <Link>IT Services</Link>
    </p>
    <p>
      <Link>Products</Link>
    </p>
    <p>
      <Link to="/tech-news">Blog</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-logo">
          <h2 className="logo-text"><Link to="/">ZRANK</Link></h2>
        </div>
        <div className="navbar-links-con">
          <Menu />
        </div>
      </div>
      <div className="navbar-signin">
        <p>
          <Link to="/contact">Contact</Link>
        </p>
        <button type="button">Support</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#FFF"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#FFF"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu-con scale-up-center">
            <div className="navbar-menu-links">
              <Menu />
              <div className="navbar-menu-con-signin">
                <p>
                  <Link to="/contact">Contact</Link>
                </p>
                <button type="button">Support</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
