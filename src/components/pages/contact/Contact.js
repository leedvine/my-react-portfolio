import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l1e7itk', 'template_wnaf46r', form.current, 'vejk_Woa616NFtI9i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  

  return (
    <section class="content">
        <h1 class="page-title">Give me a shout!</h1>
        <div class="form-contact-container">
          <div id="contact-details">
          <div id="email-adress">Email: <a href="mailto:leedvine@gmail.com">leedvine@gmail.com</a></div>
          <div id="telephone">Telephone: 0123456789</div>
          <div id="github">Github: <a target="_blank" rel="noreferrer" href="https://github.com/leedvine">https://github.com/leedvine</a></div>
          <div id="inkedin">linkedin: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lee-vine/">https://www.linkedin.com/in/lee-vine/</a></div>

          </div>
      <div class="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <p><input type="text" placeholder="Full Name" name="user_name" required></input></p>
          <p><input type="email" placeholder="Email Address" name="user_email" required></input></p>
          <p><input type="text" placeholder="Subject" name="subject" required></input></p>
          <p><textarea name="message" placeholder="Message" cols="30" rows="10"></textarea></p>
          <p><button type="submit">SEND MESSAGE!</button></p> 
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;
