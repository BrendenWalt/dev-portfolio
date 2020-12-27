import React from "react"

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

import Styles from "./SocialMedia.module.scss"

const SocialMedia = (props) => {
  return (
    <div
      className={`${Styles.socialmedia} ${
        props.isVertical ? Styles.socialmediaVertical : "" }`}
    >
      <ul>
        <li className={Styles.socialmediaIcon}>
          <a href="https://www.instagram.com/brenden_walters/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li className={Styles.socialmediaIcon}>
          <a href="https://www.linkedin.com/in/brendenwalters/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li className={Styles.socialmediaIcon}>
          <a href="https://github.com/BrendenWalt" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia