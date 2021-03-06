import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: {eq: "header2.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 2592) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <header>
    <div className="header-container">
      <Img fluid={data.image.childImageSharp.fluid} />
      <div className="header-description">
        <div className="header-description-children">
          <h1 className="header-title" style={{ fontWeight: `bold` }}>JCP Cottage</h1>
          <h1>Where Joy, Caring, and Passion come together.</h1>
          <h3>Where Joy, Caring, and Passion come together.</h3>
          <div className="primary-button">
            <Link to="/#services">
              <button>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
}
export default Header;