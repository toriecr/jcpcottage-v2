import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: {eq: "phone.jpg"}) {
        id
        childImageSharp {
          fluid(maxHeight: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <section className="contact">
    <div className="contact-img">
      <Img fluid={data.image.childImageSharp.fluid} />   
      <div className="contact-gradient"></div>
    </div>
    <div className="form-parent">
      <div className="form">
        <div className="contact-title">
          <h1>Looking for Advice?</h1>
          <h3>Your request will be answered within 24 hours.</h3>
        </div>
        <div className="contact-underline"></div>
        <form>
          <div className="form-inputs">
            <div className="name-email">
              <input type="text" name="name" placeholder="Name" className="input input-name" />
              <input type="email" name="email" placeholder="Email" className="input"/>
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className="input-textarea"
            ></textarea>
          </div>
          <div className="button">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
}

export default Contact;