import React from "react";

import Styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={Styles.contactModule}>
      <div className={Styles.contactForm} name="contact" id="contact">
        <form action="https://formspree.io/xgevdnrk" method="post" >
          <div className={Styles.formGroup}>

            <div className={Styles.formField}>
              <label htmlFor="name">
                Name
              </label>
              <input type="text" id="name" name="name" />
            </div>

            <div className={Styles.formField}>
              <label>
                Email
              </label>
              <input type="email" name="_replyto" id="email" />
            </div>

            <div className={Styles.formField}>
              <label htmlFor="name">
                Phone
              </label>
              <input type="tel" id="name" name="name" />
            </div>

           
          </div>
         
          
          <div className={Styles.formGroup}>
            <div className={Styles.formField}>
              <label>
                Message
              <textarea name="message" id="message" rows="5" />
              </label>
            </div>
            
            <button type="submit">Send</button>
          </div>
          
          <input type="text" name="_gotcha" style={{ display: `none` }} />
        </form>
      </div>
    </div>
    
  )
}

export default Contact