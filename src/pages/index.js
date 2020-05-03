import React from "react"
import {graphql} from "gatsby"
import "../styles/bulmaStyles.scss"
import "../styles/general.scss"

import Layout from "../components/utils/layout"
import SEO from "../components/seo"
import Hero from "../components/heroModule/Hero"
import About from "../components/aboutModule/About"
import Portfolio from "../components/portfolioModule/Portfolio"
import Experience from "../components/experienceModule/Experience"
import Photog from "../components/photogModule/Photog"
import Contact from "../components/contactModule/Contact"
import Instagram from "../components/instagramModule/Instagram-feed"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO />
      <Hero title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle}/>
      <About />
      <Portfolio />
      <Experience />
      <Photog />
      <Instagram />
      <Contact />
    </Layout>
  )
  
}
export default IndexPage;

export const siteData = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
