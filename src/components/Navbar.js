import React from "react"
import Links from "../constants/pageLinks"
import { FaAlignRight } from "react-icons/fa"

const Navbar = ({ toggleSidebar }) => {
  return <nav className="navbar">
    <div className="nav-container">
      <button type="button" className="toggle-btn" onClick={toggleSidebar}>
        <FaAlignRight></FaAlignRight>
      </button>
    </div>
      <Links styleClass="nav-links"></Links>
  </nav>
}

export default Navbar;