import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import ThemeContext from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d7k0h0b",
        "template_y3j5r05",
        formRef.current,
        "oFnGLNtyBS5K8i-nk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +90 539 663 70 14
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              contact@create&inspire.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              Kartal Istanbul
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="pl-desc">
            <b>It can be easy</b> — especially as creatives — to get carried
            away, create too much on your site, and end up with a messy and
            confusing layout. Everything is focused on what she can offer to the
            client and what skills she brings to the table.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                style={{ backgroundColor: darkMode && "#333" }}
                className="form-control"
                placeholder="Name"
                name="user_name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                style={{ backgroundColor: darkMode && "#333" }}
                className="form-control"
                placeholder="Subject"
                name="user_subject"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                style={{ backgroundColor: darkMode && "#333" }}
                className="form-control"
                placeholder="Email"
                name="user_email"
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                style={{ backgroundColor: darkMode && "#333" }}
                className="form-control"
                placeholder="Message"
                rows="5"
                name="message"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
