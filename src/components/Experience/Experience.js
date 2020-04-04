import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
          }
        }
      }
    }
    `
  )
  console.log(data);
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {data.allResumeItemsJson.edges.map(({node}) => (
          <div className="experience-item" key={node.id}>
            <div className="experience-title">{node.job_title}</div>
            <div className="experience-company">{node.company}</div>
            <div className="experience-range">{node.date_range}</div>
            <div className="experience-description">{node.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 

export default Experience