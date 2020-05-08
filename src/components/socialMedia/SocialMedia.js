import React from "react"

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

import Styles from "./SocialMedia.module.scss"

function SocialMedia() {

  return(
    <div className={Styles.socialmedia}>
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