import React from "react"
import SocialLinks from "../constants/socialLinks"
import { BsHouseDoor } from "react-icons/bs"

const Footer = () => {
  return <footer>
    <div className="footer-container">
      <div className="footer-desc">
        <div className="footer-icon">
          <BsHouseDoor></BsHouseDoor>
        </div>
        <h3>JCP Cottage</h3>
        <p>JCP Cottage is a residential, non-medical care facility for the elderly. We bridge the gap between independent living and skilled nursing care.</p>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>14241 La Mirada St. Victorville, CA 92392</p>
        <p>Phone: 949-769-9626</p>
        <p>Fax: 1-800-457-9981</p>
        <p>Email: patlee@jcpcottage.com</p>
      </div>
      <div className="footer-links">
        <h3>Follow Us</h3>
        <SocialLinks styleClass="footer-link" />
      </div>
    </div>
  </footer>
}

export default Footer;