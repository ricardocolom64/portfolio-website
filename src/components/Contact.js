import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      form.current.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-header">contact</div>
        <div className="contact-form-content">
          <form ref={form} onSubmit={sendEmail} id="contact-form" method="POST">
            <input name="name" placeholder="Full name" type="text" required/>
            <input name="email" placeholder="Email" type="email" required/>
            <textarea
              rows="6"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <div className="contact-under-form">
              <div className="other-contacts">
                <i class="fa fa-envelope"></i>
                <a href="mailto:ricardocolom64@gmail.com">
                  ricardocolom64@gmail.com
                </a>
              </div>
              <input type="submit" value="Send" className="submit-button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
