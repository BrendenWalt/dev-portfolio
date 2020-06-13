import React from 'react'
import Img from "gatsby-image"

import Styles from './portfolioItem.module.scss'

const PortfolioItem = (props) => {

  const data = props.data;

  return (
    <div className={Styles.portfolioItem}>
      <div className={Styles.portfolioItemTitle}>
        <h3>{data.project_title}</h3>
      </div>
      {/* {props.data.project_description} */}
      <Img fluid={props.data.project_thumbnail.childImageSharp.fluid} />
    </div>
  )
}

export default PortfolioItem;