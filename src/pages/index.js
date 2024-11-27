import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is Ready Rosie video library client. Please visit Videos page to check Ready Rosie videos.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
