import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l1e7itk', 'template_wnaf46r', form.current, 'vejk_Woa616NFtI9i')
      .then((result) => {
          alert("Message sent successfully");
      }, (error) => {
          alert("Error - Please try again");
      });
      e.target.reset()
  };
  

  return (
    <section class="content">
        <h1 class="page-title">Give me a shout!</h1>
      <div class="contact-form">
        <h5>You can send me a message via the form below or contact me via the other contact options further down this page.</h5>
        <form ref={form} onSubmit={sendEmail}>
          <p><input type="text" placeholder="Full Name" name="user_name" required></input></p>
          <p><input type="email" placeholder="Email Address" name="user_email" required></input></p>
          <p><input type="text" placeholder="Subject" name="subject" required></input></p>
          <p><textarea name="message" placeholder="Message" cols="30" rows="10"></textarea></p>
          <p><button type="submit">SEND MESSAGE!</button></p> 
        </form>
      </div>
          <div id="contact-details">
          <div>Email: <a href="mailto:leedvine@gmail.com">leedvine@gmail.com</a></div>
          <div>Telephone: <a target="_blank" rel="noreferrer" href="tel:0123456789">0123456789</a></div>
          <div>Github: <a target="_blank" rel="noreferrer" href="https://github.com/leedvine">https://github.com/leedvine</a></div>
          <div>linkedin: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lee-vine/">https://www.linkedin.com/in/lee-vine/</a></div>

      </div>
    </section>
  );
};

export default Contact;
