import React from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wwptcmv',
        'template_2b06q5u',
        e.target,
        'user_Wy2GreLRqVjqZHDXxvvvT'
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
  }
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className='contact-bg' id='contact'>
        <h1>{t('contactHeader')}</h1>
        <p>{t('contactP')}</p>
        <div className='contact-container'>
          <div className='contact-inner-container'>
            <div className='contact-info'>
              <h4>{t('contactInfoH4')}</h4>
              <p>{t('contactInfoP')}</p>
              <div className='icon-info'>
                <div>
                  <i class='fas fa-phone-alt'></i>
                  <span>{t('iconInfoSpanPhone')}</span>
                </div>
                <div>
                  <i class='fas fa-envelope'></i>
                  <span>Email : samofanos@gmail.com</span>
                </div>
                <div>
                  <i class='fas fa-map-marker-alt'></i>
                  <span>{t('iconInfoSpanAdress')}</span>
                </div>
              </div>
              <div className='social-media'>
                <div>
                  <a href='javascript:void(0)' className='social-icon'>
                    <i class='fab fa-github'></i>
                  </a>
                </div>
                <div>
                  <a
                    href='http://www.linkedin.com/in/hussam-fanous-1b356511a'
                    className='social-icon'
                    target='_blank'
                  >
                    <i class='fab fa-linkedin'></i>
                  </a>
                </div>
                <div>
                  <a
                    href='http://www.instagram.com/hussamfanos'
                    className='social-icon'
                    target='_blank'
                  >
                    <i class='fab fa-instagram'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className='col'>
              <div className='form-contact'>
                <label>{t('formContactFirst')}</label>
                <input type='text' name='firstname' />
              </div>
              <div className='form-contact'>
                <label>{t('formContactLast')}</label>
                <input type='text' name='secname' />
              </div>
            </div>
            <div className='col'>
              <div className='form-contact'>
                <label>Email</label>
                <input type='email' name='email' />
              </div>
              <div className='form-contact'>
                <label>{t('formContactPhone')}</label>
                <input type='tel' name='phone' />
              </div>
            </div>
            <div className='col'>
              <div className='form-contact'>
                <label>{t('formContactMsg')}</label>
                <textarea rows='3' name='message'></textarea>
              </div>
            </div>
            <div className='col'>
              <div className='form-contact'>
                <button type='submit'>{t('formContactSend')}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
