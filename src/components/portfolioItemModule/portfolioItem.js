import React from 'react'
import Img from "gatsby-image"
// Import Icons
import { FaHtml5, FaCss3Alt, FaSass, FaWordpress, FaJsSquare, FaReact, FaAngular, FaGithub} from "react-icons/fa"

import Styles from './portfolioItem.module.scss'

const PortfolioItem = (props) => {

  const data = props.data;
  const techIcons = [];

  if(data.tech_stack.includes("React")) {
    techIcons.push(<FaReact />);
  }
  if(data.tech_stack.includes("Wordpress")) {
    techIcons.push(<FaWordpress />);
  }
  if(data.tech_stack.includes("Angular")) {
    techIcons.push(<FaAngular />);
  }
  if(data.tech_stack.includes("Javascript")) {
    techIcons.push(<FaJsSquare/>);
  }
  if(data.tech_stack.includes("Sass")) {
    techIcons.push(<FaSass />);
  }
  if(data.tech_stack.includes("HTML")) {
    techIcons.push(<FaHtml5 />);
  }
  if(data.tech_stack.includes("CSS")) {
    techIcons.push(<FaCss3Alt />);
  }

  return (
    <div className={Styles.portfolioItem}>
      
      <div className={Styles.portfolioItemOverlayContainer}>
        <div className={Styles.portfolioTechOverlay}>
          {techIcons}
        </div>
      </div>
      <a className={Styles.portfolio_link_overlay} href={data.url} target="_blank" rel="noopener noreferrer">&nbsp;</a>
      
      <div className={Styles.portfolioItemTitle}>
        <h3>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            {data.project_title}
          </a>
        </h3>
        <a href={data.github_url} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <Img fluid={props.data.project_thumbnail.childImageSharp.fluid} />
      </a>
      
    </div>
  )
}

export default PortfolioItem;