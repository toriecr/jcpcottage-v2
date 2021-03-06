import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/pageLinks"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Navbar = ({ toggleSidebar }) => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: {eq: "logo.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <div className="logo">
          <div className="logo-img">
            <Link to="/">
              <Img fluid={data.image.childImageSharp.fluid} />  
            </Link>
          </div>
          <div className="logo-heading">
            <Link to="/">
              <h4>JCP Cottage</h4>
            </Link>
          </div>
        </div>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar