import React, {useState} from 'react'
import { FaCaretRight } from 'react-icons/fa'
import Styles from './experienceCard.module.scss'

const ExperienceCard = (props) => {

  const [active, setActive] = useState(false);

  const toggleAccordion = (e) => {
    e.preventDefault();
    setActive(!active);
  }

  const info = props.info;

  return (
    <div className={Styles.experienceItem} key={info.id} style={props.bg}>
      <div className={Styles.experiencePopout}>
        <h4 className={Styles.experienceTitle}>{info.job_title}</h4>
        <p className={Styles.experienceCompany}>{info.company}</p>
      </div>
      
      <p className={Styles.experienceRange}>{info.date_range}</p>
      <p className={Styles.experienceDescription}>{info.description}</p>
      <div className={`${Styles.experienceAccordion}${active ? ' open' : ''}`} onClick={toggleAccordion} role="presentation">
        <span className={Styles.accIcon}>
          <FaCaretRight />
        </span> More Details...
        <div className={Styles.experienceAccordionContent}>
          <ul className={Styles.experienceTraits}>
            {info.list.map((item) => {
              return (
                <li>{item}</li>
              )
            })}
          </ul>
          <ul className={Styles.experienceSkills}>
            {info.skills_list.map((skill) => {
              return (
                <li>{skill}</li>
              )
            })}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default ExperienceCard