import React from "react"
import {useStaticQuery, graphql} from"gatsby"
import PortfolioItem from "../portfolioItemModule/portfolioItem"
import Styles from "./portfolio.module.scss"

const Portfolio = () => {

  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allPortfolioItemsJson {
          edges {
            node {
              id
              project_description
              project_thumbnail {
                childImageSharp {
                  fluid(quality: 80, maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              project_title
              tech_stack
              github_link
              url
            }
          }
        }
      }
    `
  )
  console.log(data);
  return (
    <div className={`${Styles.portfolioModule} content-module`} name="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className={Styles.portfolioItems}>
        {data.allPortfolioItemsJson.edges.map(({ node }) => {
          console.log(node);
          return (
            <PortfolioItem data={node} />
          );

        })}
      </div>
      

      
    </div>
  )
}

export default Portfolio