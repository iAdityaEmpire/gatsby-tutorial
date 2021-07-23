// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle={"Home Page"}>
          <p>Codivate is the best nonprofit.</p>
          <StaticImage
            alt="Codivate, a coding nonprofit"
            src="../images/full-logo.svg"
          />
      </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
