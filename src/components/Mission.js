import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Mission = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: {eq: "mission.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 2592) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <section className="mission">
    <div className="mission-description">
      <h2>Our Mission</h2>
      <p>At JCP Cottage, our mission is to provide compassionate care in a home setting.</p>
    </div>
    <div className="mission-img">
      <Img fluid={data.image.childImageSharp.fluid} /> 
      <div className="gradient"></div>
    </div>
  </section>
}

export default Mission;