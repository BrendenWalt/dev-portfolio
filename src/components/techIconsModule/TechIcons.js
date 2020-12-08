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
import {
  SiAdobelightroomclassic,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobepremiere,
  SiAdobeaftereffects,
} from "react-icons/si"


import Styles from "./TechIcons.module.scss"

const iconList = [
  <FaHtml5 title="HTML5" />,
  <FaJsSquare title="Javascript" />,
  <FaReact title="ReactJS" />,
  <FaAngular title="AngularJS" />,
  <FaCss3Alt title="CSS" />,
  <FaSass title="Sass" />,
  <FaWordpress title="Wordpress" />,
  <FaGithub title="Github" />,
  <FaRebel title="Rebel Alliance" />,
  <FaPhp title="PHP" />,
  <SiAdobelightroomclassic title="Lightroom Classic" />,
  <SiAdobephotoshop title="Photoshop" />,
  <SiAdobexd title="XD"/>,
  <SiAdobepremiere title="Premiere" />,
  <SiAdobeaftereffects title="After Effects" />
]

const TechIcons = () => {
  return (
    <div className={Styles.techIconsModule}>
      {/* <div className={Styles.techDivider}></div> */}
      <div className={Styles.techIconsContainer}>
        {iconList.map(icon => (
          <div className={Styles.techIcon}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechIcons;