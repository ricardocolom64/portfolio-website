import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="content">
        <div className="header">contact</div>
        <div className="intro" style={{ whiteSpace: "pre-line" }}>
          Reach me at my email: {"\n"}
        </div>
        <a href="mailto:ricardocolom64@gmail.com">ricardocolom@gmail.com</a>
      </div>
    </div>
  );
}

export default Contact;
