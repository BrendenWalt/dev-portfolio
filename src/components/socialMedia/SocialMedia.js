import React from "react"

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

import Styles from "./SocialMedia.module.scss"

const SocialMedia = (props) => {

  return(
    <div className={`${Styles.socialmedia} ${props.isVertical ? Styles.socialmediaVertical : ''}`}>
      <h2>{props.isVertical}</h2>
      <ul>
        <li className={Styles.socialmediaIcon}>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li className={Styles.socialmediaIcon}>
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
        <li className={Styles.socialmediaIcon}>
          <a href="#">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia