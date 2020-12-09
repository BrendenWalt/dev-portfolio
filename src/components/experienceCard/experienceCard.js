import React, {useState} from 'react'
import { FaCaretRight } from 'react-icons/fa'
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
  FaSquarespace
} from "react-icons/fa"
import Styles from './experienceCard.module.scss'
import Img from "gatsby-image"

const ExperienceCard = (props) => {

  const [active, setActive] = useState(false);

  const toggleAccordion = event => {
    event.preventDefault();
    setActive(!active);
  }

  const info = props.info;

  const icons = [
    {
      name: 'HTML',
      icon: <FaHtml5 title="HTML5" />
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt title="CSS" />
    },
    {
      name: 'Sass',
      icon: <FaSass title="Sass" />
    },
    {
      name: 'Wordpress',
      icon: <FaWordpress title="Wordpress" />
    },
    {
      name: 'Javascript',
      icon: <FaJsSquare title="Javascript"/>
    },
    {
      name: 'React',
      icon: <FaReact title="React" />
    },
    {
      name: 'Angular',
      icon: <FaAngular title="AngularJS"/>
    },
    {
      name: 'Github',
      icon: <FaGithub title="Github"/>
    },
    {
      name: 'Php',
      icon: <FaPhp title="PHP"/>
    },
    {
      name: 'Squarespace',
      icon: <FaSquarespace title="Squarespace"/>
    }
  ]

  return (
    <div className={Styles.experienceItem} key={info.id}>
      <div className={Styles.experiencePopout}>
        <h4 className={Styles.experienceTitle}>{info.job_title}</h4>
        <p className={Styles.experienceCompany}>{info.company}</p>
      </div>
      <div className={Styles.companyLogo}>
        <div>
          <Img fluid={props.logo} />
        </div>
        
      </div>
      
      <p className={Styles.experienceRange}>{info.date_range}</p>
      <p className={Styles.experienceDescription}>{info.description}</p>
      <div 
        className={`${Styles.experienceAccordion} ${active ? Styles.open : ''}`} 
        onClick={toggleAccordion} 
        onKeyDown={toggleAccordion}
        role="button"
      >
        <span className={Styles.accIcon}>
          <FaCaretRight />{active ? ' Less' : ' More...'}
        </span>
        <div className={Styles.experienceAccordionContent}>
          <ul className={Styles.experienceTraits}>
            {console.log("info ", info.skills_list)}
            {info.list.map((item) => {
              return (
                <li>{item}</li>
              )
            })}
          </ul>
          <ul className={Styles.experienceSkills}>
            {info.skills_list.map((skill) => {
              let skillItem = <li>{skill}</li>
              for (let i = 0; i < icons.length; i++) {
                if(icons[i].name.toLowerCase() == skill.toLowerCase()) {
                  skillItem = <li>{icons[i].icon}</li>;
                  return skillItem;
                }
              }
              return skillItem;
            })}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default ExperienceCard