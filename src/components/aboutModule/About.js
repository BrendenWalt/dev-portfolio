import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Styles from "./About.module.scss"


const About = () => {

  const Data = useStaticQuery(graphql`
    query aboutPortraitQuery {
      file(relativePath: {eq: "portrait-ph.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

  return (
    <div className={Styles.aboutSection} name="about-me" id="about-me">
      <div className={Styles.aboutCard}>
        <div className={Styles.aboutPortrait}>
          <Img fluid={Data.file.childImageSharp.fluid} />
        </div>
        <div>
          <h2>About</h2>
          <p>This is where I will write about what I do with my life.  I can include details about photography and making stuff for the internet.  For now, I am just leaving this placeholder content </p>
        </div>
      </div>
    </div>
  )
}

export default About