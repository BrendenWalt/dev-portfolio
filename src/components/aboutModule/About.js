import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Styles from "./About.module.scss"


const About = () => {

  const Data = useStaticQuery(graphql`
    query aboutPortraitQuery {
      file(relativePath: {eq: "bw-portrait.jpg"}) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

  return (
    <div className={`${Styles.aboutSection} content-module`} name="about-me" id="about-me">
      <h2>About</h2>
      <div className={Styles.aboutCard}>
        <div className={Styles.aboutPortrait}>
          <Img fluid={Data.file.childImageSharp.fluid} />
        </div>
        <div className={Styles.aboutContent}>
          
          <p>This is where I will write about what I do with my life.  I can include details about photography and making stuff for the internet.  For now, I am just leaving this placeholder content </p>
        </div>
      </div>
    </div>
  )
}

export default About