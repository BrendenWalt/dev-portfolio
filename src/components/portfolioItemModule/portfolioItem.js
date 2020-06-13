import React from 'react'
import Img from "gatsby-image"

import Styles from './portfolioItem.module.scss'

const PortfolioItem = (props) => {
  return (
    <div className={Styles.portfolioItem}>
      <h4>Portfolio Item</h4>
      {props.data.project_description}
      <Img fluid={props.data.project_thumbnail.childImageSharp.fluid} />
    </div>
  )
}

export default PortfolioItem;