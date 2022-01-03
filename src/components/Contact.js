import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      {/* <div className="content">
        <div className="header">contact</div>
        <div className="intro" style={{ whiteSpace: "pre-line" }}>
          Reach me at my email: {"\n"}
        </div>
        <a href="mailto:ricardocolom64@gmail.com">ricardocolom@gmail.com</a>
      </div> */}
      <div className="contact-content">
        <div className="contact-header">contact</div>
        <div className="contact-form-content">
          <div className="contact-form-warning">
            <strong>WARNING:</strong> Form is under construction, please use my email below
            instead.
          </div>
          <form id="contact-form" method="POST">
            <input name="name" placeholder="Full name" type="text" />
            <input name="email" placeholder="Email" type="email" />
            <textarea
              rows="6"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </form>
        </div>
        <div className="contact-under-form">
          <div className="other-contacts">
            <i class="fa fa-envelope"></i>
            <a href="mailto:ricardocolom64@gmail.com">ricardocolom@gmail.com</a>
          </div>
          <div className="submit-button">
            <div className="button-text">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
