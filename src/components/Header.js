import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
          <p>Where Joy, Caring, and Passion come together.</p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  </header>
}

export default Header;
