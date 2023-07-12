import React, { useState } from 'react';
import Modal from 'react-modal';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors((prevState) => ({ ...prevState, [name]: 'This field is required.' }));
    } else {
      setErrors((prevState) => ({ ...prevState, [name]: null }));
    }
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'This field is required.';
    }
    if (email.trim() === '') {
      errors.email = 'This field is required.';
    }
    if (message.trim() === '') {
      errors.message = 'This field is required.';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append('access_key', '88005c86-d9ee-482b-b6f6-3fd956f87322');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Form submission successful');
          setSubmissionStatus('success');
          setName('');
          setEmail('');
          setMessage('');
          setTimeout(() => {
            setSubmissionStatus(null);
          }, 2600);
        } else {
          console.log('Form submission failed');
          setSubmissionStatus('error');
        }
      } catch (error) {
        console.log('An error occurred:', error);
        setSubmissionStatus('error');
      }
    }
  };

  return (
    <div className="contact-page">
      <div>
        <p className="flavor-text">I'd love to chat.</p>

        <div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-wrapper">
                <div className="input-name">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    required
                    placeholder="What's your name?"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="input-email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                    placeholder="What's your email?"
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleInputChange}
                required
                placeholder="What do you want to tell me?"
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit" className="form-submit">
              Send
            </button>
          </form>
          <Modal
            isOpen={submissionStatus === 'success'}
            onRequestClose={() => setSubmissionStatus(null)}
            className="success-modal"
            overlayClassName="modal-overlay"
            contentLabel="Success Modal"
          >
            <div className="success-message">Message sent successfully!</div>
          </Modal>
          {submissionStatus === 'error' && (
            <div className="error-message">Failed to send message. Please try again.</div>
          )}
        </div>
      </div>
    </div>
  );
}
