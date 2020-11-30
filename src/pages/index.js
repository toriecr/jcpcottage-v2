import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services"
import Mission from "../components/Mission"
import Pictures from "../components/Pictures"
import Amenities from "../components/Amenities"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Services /> 
      <Mission />
      <Pictures />
      <Amenities />
    </Layout>
  </div>
)

export default IndexPage;
