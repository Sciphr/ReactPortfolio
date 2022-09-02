import React, { useRef } from 'react';
import './Contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiMessengerFill } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_93wm9qg',
        'template_9rbnr4l',
        form.current,
        'jdxfWwR1ZIeqq1rMi'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jacobtberry99@gmail.com</h5>
            <a
              href="mailto:jacobtberry99@gmail.com"
              target="__blank"
              rel="noreferrer"
            >
              Send An Email
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jacob Berry - Facebook</h5>
            <a
              href="https://m.me/jacobtberry99"
              target="__blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
