import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_4j9c7xm', 'template_x7j89ub', form.current, 'j_YZY18r7kp4X94L-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send"  id='submit'/>
      {message && <span>Thanks, I'll reply As Soon As Possible</span>}
    </form>
      </div>  
    </div>
  );
}
