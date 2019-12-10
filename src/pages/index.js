import React from "react"
import {graphql} from "gatsby"
import "../styles/bulmaStyles.scss"

import Layout from "../components/utils/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navigation from "../components/Nav/Navigation"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Portfolio from "../components/Portfolio/Portfolio"
import Experience from "../components/Experience/Experience"
import Photog from "../components/Photog/Photog"
import Contact from "../components/Contact/Contact"
import Instagram from "../components/Instagram-feed/Instagram-feed"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO />
      <Navigation />
      <Hero title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle}/>
      <About />
      <Portfolio />
      <Experience />
      <Photog />
      <Instagram />
      <Contact />
      <div>
        <Image />
      </div>
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
