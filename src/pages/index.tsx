import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/global.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Trav's Blog</h1>
    <p>Welcome to the Gatsby-powered version of my blog.</p>
    <p>Writing is one of my passions. I hope you enjoy!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
