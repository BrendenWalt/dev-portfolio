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
              project_thumbnail
              project_title
              tech_stack
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
      {data.allPortfolioItemsJson.edges.map(({node}) => {
        console.log(node);
        return (
          <p>
            {node.project_description}
          </p>
        );
        
      })}

      <PortfolioItem />
    </div>
  )
}

export default Portfolio