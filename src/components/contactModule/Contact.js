import React from "react";
import SocialMedia from "../socialMedia/SocialMedia"

import Styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={Styles.contactModule}>

      <div className={Styles.contactHeader}>
        <h2>Contact</h2>
      </div>

      <div className={Styles.formContainer}>
        <div className={Styles.contactForm} name="contact" id="contact">
          <form action="https://formspree.io/xgevdnrk" method="post" >
            <div className={Styles.formGroup}>

              <div className={Styles.formField}>
                <label htmlFor="name">
                  Name*
                </label>
                <input type="text" id="name" name="name" />
              </div>

              <div className={Styles.formField}>
                <label htmlFor="email">
                  Email*
                </label>
                <input type="email" name="_replyto" id="email" />
              </div>

              <div className={`${Styles.formField} ${Styles.formMessage}`}>
                <label>
                  Message*
                <textarea name="message" id="message" rows="5" />
                </label>
              </div>
              
              <button type="submit" className="cta-secondary">Send Message</button>

            
            </div>
            
            <input type="text" name="_gotcha" style={{ display: `none` }} />
          </form>
        </div>

        <div className={Styles.contactSocial}>
          <SocialMedia />
        </div>
      </div>

      
    </div>
    
  )
}

export default Contact