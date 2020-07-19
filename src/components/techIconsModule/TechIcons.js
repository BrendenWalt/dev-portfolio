import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaWordpress,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaGithub,
  FaPhp,
  FaRebel
} from "react-icons/fa"
import Lrc from "../../images/icons/lrc.svg"


import Styles from "./TechIcons.module.scss"

const TechIcons = () => {
  return (
    <div className={Styles.techIconsModule}>
      <div className={Styles.techDivider} />
      <div className={Styles.techIconsContainer}>
        <div className={Styles.techIcon}>
          <FaHtml5 title="HTML5" />
        </div>
        <div className={Styles.techIcon}>
          <FaJsSquare title="Javascript" />
        </div>
        <div className={Styles.techIcon}>
          <FaReact title="ReactJS" />
        </div>
        <div className={Styles.techIcon}>
          <FaAngular title="AngularJS" />
        </div>
        <div className={Styles.techIcon}>
          <FaCss3Alt title="CSS" />
        </div>
        <div className={Styles.techIcon}>
          <FaSass title="Sass" />
        </div>
        <div className={Styles.techIcon}>
          <FaWordpress title="Wordpress" />
        </div>
        <div className={Styles.techIcon}>
          <FaGithub title="Github" />
        </div>
        <div className={Styles.techIcon}>
          <FaRebel title="Rebel Alliance" />
        </div>
        <div className={Styles.techIcon}>
          <FaPhp title="PHP" />
        </div>
        <div className={Styles.techIcon}>
          <img src={Lrc} alt="Lightroom Classic" title="Lightroom Classic" />
        </div>
        <div className={Styles.techIcon}>
          <img src={Lrc} alt="Lightroom Classic" title="Lightroom Classic" />
        </div>
      </div>
    </div>
  )
}

export default TechIcons;