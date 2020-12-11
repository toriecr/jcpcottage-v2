import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Services from "../components/Services"
import Mission from "../components/Mission"
import Pictures from "../components/Pictures"
import Amenities from "../components/Amenities"
import Contact from "../components/Contact"
import Map from "../components/Map"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Header />
      <Services /> 
      <Mission />
      <Pictures />
      <Amenities />
      <Contact />
      <Map />
    </Layout>
  </div>
)
export default IndexPage;
