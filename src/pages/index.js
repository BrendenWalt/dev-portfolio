import React from "react"
import { Link } from "gatsby"

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

const IndexPage = () => (
  <Layout>
    <SEO />
    <Navigation />
    <Hero />
    <About />
    <Portfolio />
    <Experience />
    <Photog />
    <Contact />
    <Instagram />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
