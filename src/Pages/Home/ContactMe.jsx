
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef, useState } from 'react';
import useScrollAnimation from '../Animation/useScrollAnimation';

export default function ContactMe() {
  const [ref, isVisible] = useScrollAnimation();
    const form = useRef();
    const [notification, setNotification] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0itxwsl', 'template_13wtany', form.current, {
                publicKey: 'dpI_3ek76BOJ6QDf7',
            })
            .then(
                () => {
                    setNotification('Your message is sent successfully!');
                    form.current.reset(); // Réinitialiser le formulaire après l'envoi
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setNotification('Failed to send your message. Please try again.');
                },
            );
    };

    return (
       <section
  id="Contact"
  style={{
    backgroundImage: "url('./img/wave.png')",
    backgroundSize: '100%',
    backgroundPosition: 'center 40%',
    backgroundRepeat: 'no-repeat',
    padding: '0.5rem 0.5rem',  
    
  }}
  ref={ref}
      className={`contact-section section-animation ${isVisible ? 'visible' : ''}`}
>
            <div>
                <h2 className="about-title">Contact Me</h2>
                <p className="text-lg">
                    Interested in collaborating or learning more about my work? Feel free to reach out! Fill out the form below, and I’ll get back to you as soon as possible. Whether you have a job opportunity, a project idea, or just want to connect, I’d love to hear from you!
                </p>
            </div>
           <form className="contact-form-container" ref={form} onSubmit={sendEmail}>
  <div className="container">
    <label htmlFor="first-name" className="contact-label">
      <input
        type="text"
        className="contact-input text-md"
        name="first-name"
        id="first-name"
        placeholder="Enter your first name"
        required
      />
    </label>

    <label htmlFor="last-name" className="contact-label">
      <input
        type="text"
        className="contact-input text-md"
        name="last-name"
        id="last-name"
        placeholder="Enter your last name"
        required
      />
    </label>

    <label htmlFor="email" className="contact-label">
      <input
        type="email"
        className="contact-input text-md"
        name="email"
        id="email"
        placeholder="Enter your email"
        required
      />
    </label>

    <label htmlFor="phone-number" className="contact-label">
      <input
        type="number"
        className="contact-input text-md"
        name="phone-number"
        id="phone-number"
        placeholder="Enter your phone number"
        required
      />
    </label>
  </div>

  <label htmlFor="message" className="contact-label">
    <textarea
      className="contact-input text-md"
      name="message"
      id="message"
      rows={8}
      placeholder="Type your message ..."
      required
    ></textarea>
  </label>

  <div>
    <button type="submit" className="submit-button">Submit</button>
    {notification && (
      <div className="notification-message">
        {notification}
      </div>
    )}
  </div>
</form>

        </section>
    );
}
