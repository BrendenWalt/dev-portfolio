import React from "react"
import {graphql} from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/bulmaStyles.scss"
import "../styles/general.scss"

import Layout from "../components/utils/layout"
import SEO from "../components/seo"
import Hero from "../components/heroModule/Hero"
import About from "../components/aboutModule/About"
// import PhotoDivider from "../components/dividerModule/PhotoDivider"
import Portfolio from "../components/portfolioModule/Portfolio"
import Experience from "../components/experienceModule/Experience"
import Photog from "../components/photogModule/Photog"
import Contact from "../components/contactModule/Contact"
import Instagram from "../components/instagramModule/Instagram-feed"
// import TechIcons from "../components/techIconsModule/TechIcons"
import ToTop from "../components/totopModule/ToTop"

const IndexPage = ({data}) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/ina6hto.css"></link>
        <link href="https://fonts.googleapis.com/css2?&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Layout>
        <SEO />
        <Hero title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle} />
        <Portfolio />
        {/* <PhotoDivider /> */}
        <About />
        <Experience />
        <Photog />
        <Instagram />
        <Contact />
        <ToTop />
      </Layout>
    </div>
    
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
