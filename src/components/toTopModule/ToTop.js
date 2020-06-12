import React from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Styles from './toTop.module.scss'

const ToTop = () => {
  return (
    <div className={Styles.toTop}>
      <AnchorLink 
        to="/#header-logo"
        stripHash >
        <FaChevronUp />
      </AnchorLink>
    </div>
  )
}

export default ToTop;