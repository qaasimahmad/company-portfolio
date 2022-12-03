import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer section-padding'>
      <div className="footer-heading">
        <h1 className='gradient-text'>Discuss Your Business’s IT Needs</h1>
      </div>
      <div className="footer-button">
        <p>Request a Quote</p>
      </div>
      <div className="footer-links">
        <div className="footer-links-logo">
          <h2 className='logo-text'>ZRANK CONSULT LTD</h2>
          <p>3 Lansdowne court, Tilbury, Essex, Rm 18 7AA, All Rights Reserved</p>
        </div>
        <div className="footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Social Media</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-links-div">
          <h4>Get in touch</h4>
          <p>3 Lansdowne court, Tilbury, Essex, Rm 18 7AA</p>
          <p>01375790716</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2022 ZRANK. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer