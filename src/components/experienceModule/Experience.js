import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import ExperienceCard from '../experienceCard/experienceCard'
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import Styles from "./Experience.module.scss"

const Experience = () => {

  

  const data = useStaticQuery(
    graphql`
    query {
      allResumeItemsJson {
        edges {
          node {
            company
            date_range
            description
            id
            job_title
            list
            skills_list
            company_logo {
              childImageSharp {
                fluid(quality: 80, maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    `
  )

  

  console.log(data);
  return (
    <div className={`${Styles.experienceModule} content-module`} name="experience" id="experience">
      <h2>Experience</h2>
      <div className={Styles.experienceList}>
        {data.allResumeItemsJson.edges.map(({node}) => {
          const bg = { backgroundImage: `url(${node.company_logo.childImageSharp.fluid.src})`};
          return (
            <ExperienceCard info={node} bg={bg} />
          )
        })}
      </div>
      <div class={Styles.experienceResumeBtn}>
        <a class={`cta-primary ${Styles.experienceResume}`} href="#" >View Resume</a>
      </div>
    </div>
  )
} 

export default Experience