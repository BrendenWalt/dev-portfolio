import React from 'react'
import Img from "gatsby-image"
// Import Icons
import { FaHtml5, FaCss3Alt, FaSass, FaWordpress, FaJsSquare, FaReact, FaAngular} from "react-icons/fa"

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
      
      <div className={Styles.portfolioItemTitle}>
        <h3>{data.project_title}</h3>
      </div>
      <Img fluid={props.data.project_thumbnail.childImageSharp.fluid} />
    </div>
  )
}

export default PortfolioItem;