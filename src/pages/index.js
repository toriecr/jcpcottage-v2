import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Services from "../components/Services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Services />
  </Layout>
)

export default IndexPage;
