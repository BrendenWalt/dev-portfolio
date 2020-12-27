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
          <a href="https://www.instagram.com/brenden_walters/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li className={Styles.socialmediaIcon}>
          <a href="https://www.linkedin.com/in/brendenwalters/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li className={Styles.socialmediaIcon}>
          <a href="https://github.com/BrendenWalt" target="_blank">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia