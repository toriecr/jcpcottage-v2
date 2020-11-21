import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services"
import Pictures from "../components/Pictures"
import Amenities from "../components/Amenities"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Services />
    <Pictures />
    <Amenities />
  </Layout>
)

export default IndexPage;
