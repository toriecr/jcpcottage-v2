/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Mission from "./Mission"
import Map from "./Map"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1170,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Mission />
      <Map />
      <footer style={{
          marginTop: `2rem`,
          backgroundColor: `green`,
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
