import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"

const Pictures = () => {
  const data = useStaticQuery(graphql`
    {
      image1: file(relativePath: {eq: "bedroom.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 456) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: {eq: "backyard.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 2592) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: {eq: "livingroom.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 2592) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <section
  style={{
    margin: `0 auto`,
    maxWidth: 1170,
    padding: `0 1.0875rem 1.45rem`,
  }}>
    <Title title="Explore Our Facility" />
    <div className="underline"></div>
    <div className="pictures-container">
      <div className="pic1">
        <Img fluid={data.image1.childImageSharp.fluid} />
      </div>
      <div className="pic2">
        <Img fluid={data.image2.childImageSharp.fluid} />
      </div>
      <div className="pic3">
        <Img 
          fluid={data.image3.childImageSharp.fluid} 
          style={{maxHeight: '500px'}}
          imgStyle={{ objectFit: 'contain' }}
        />
      </div>
    </div>
    <div className="pictures-button" style={{ marginTop: `4rem` }}>
      <Link to="/pictures">
        <button>View more</button>
      </Link>
    </div>
  </section>
}

export default Pictures;