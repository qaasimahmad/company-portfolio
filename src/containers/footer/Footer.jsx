import React from "react";
import "./footer.css";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer section-padding">
      <div className="footer-heading">
        <h1 className="gradient-text">Discuss Your Business’s IT Needs</h1>
      </div>
      <div className="footer-button">
        <p onClick={() => navigate("/contact")}>Request a Quote</p>
      </div>
      <div className="footer-links">
        <div className="footer-links-logo">
          <h2 className="logo-text">ZRANK CONSULT LTD</h2>
          <p>
            3 Lansdowne court, Tilbury, Essex, Rm 18 7AA, All Rights Reserved
          </p>
        </div>
        <div className="footer-links-div">
          <h4>Links</h4>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about-zrank">About</Link>
          </p>
          <p>
            <Link to="/it-services">IT Services</Link>
          </p>
          <p>
            <Link to="/products">Products</Link>
          </p>
        </div>
        <div className="footer-links-div">
          <h4>Company</h4>
          <p>
            <Link to="/legal/privacy-policy">Terms & Conditions</Link>
          </p>
          <p>
            <Link to="/legal/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
        <div className="footer-links-div">
          <h4>Get in touch</h4>
          <p>3 Lansdowne court, Tilbury, Essex, Rm 18 7AA</p>
          <p>+4401375790716</p>
          <p>info@zrankconsult.co.uk</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2022 ZRANK. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
