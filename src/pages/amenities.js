import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllAmenities from "../components/AllAmenities"

const AmenitiesPage = () => (
  <Layout>
    <SEO title="Amenities" />
    <AllAmenities />
  </Layout>
)

export default AmenitiesPage;
