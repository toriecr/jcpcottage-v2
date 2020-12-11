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
      <p style={{ lineHeight: `1.6rem` }}>At JCP Cottage, our mission is to provide <b>compassionate care in a home setting.</b> We strive to bridge the gap between independent living and skilled nursing care, while also providing a small, protected community in which residents can flourish. While under our constant care and supervision, residents will enjoy a comfortable and healthy life.</p>
    </div>
    <div className="mission-img">
      <Img fluid={data.image.childImageSharp.fluid} /> 
      <div className="mission-gradient"></div>
    </div>
  </section>
}
export default Mission;