import React from "react"

const Contact = () => {
  return (
    <div className="contact-form" name="contact" id="contact">
      <form action="https://formspree.io/xgevdnrk" method="post">
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="_replyto" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
        <input type="text" name="_gotcha" style={{ display:`none` }} />
      </form>
    </div>
  )
}

export default Contact