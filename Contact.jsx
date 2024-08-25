import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch</span>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Let's Connect!</h3>
          <p className='contact__description'>
            Feel free to get in touch with me. <br/>I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>
                  <a href="mailto:sparthpatel18@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0000FF' }}>
                    sparthpatel18@gmail.com
                  </a>
                </h4>
              </div>
            </div>

            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>
                  <a href="tel:+13432624678" target="_blank" rel="noopener noreferrer" style={{ color: '#0000FF' }}>
                    +1 343 262 4678
                  </a>
                </h4>
              </div>
            </div>
          </div>

          <div className='contact__socials'>
            <a
              href='https://www.linkedin.com/in/sparthpatel18/'
              className='contact__social-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>

            <a
              href='https://github.com/sparthpatel18'
              className='contact__social-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>

            <a
              href='https://x.com/home?lang=en'
              className='contact__social-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
            </a>

            <a
              href='https://discord.com/channels/@me'
              className='contact__social-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input
                type='text'
                placeholder='Your Name'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='email'
                placeholder='Your Email'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='text'
                placeholder='Your Subject'
                className='form__control'
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea
              placeholder='Your Message'
              className='form__control textarea'
            ></textarea>
          </div>

          <button className='button'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
