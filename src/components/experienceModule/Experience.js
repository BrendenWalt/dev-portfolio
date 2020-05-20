import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
            company_logo {
              childImageSharp {
                fluid {
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
        {data.allResumeItemsJson.edges.map(({node}) => (
          <div className={Styles.experienceItem} key={node.id}>
            <div className="experience-title">{node.job_title}</div>
            <div className="experience-company">{node.company}</div>
            <Img fluid={node.company_logo.childImageSharp.fluid} />
            <div className="experience-range">{node.date_range}</div>
            <div className="experience-description">{node.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 

export default Experience