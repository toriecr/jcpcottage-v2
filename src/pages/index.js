import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services"
import Pictures from "../components/Pictures"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Services />
    <Pictures />
  </Layout>
)

export default IndexPage;
