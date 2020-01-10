import React from "react"
import Info from "../components/info"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../scss/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Info />
  </Layout>
)

export default IndexPage
