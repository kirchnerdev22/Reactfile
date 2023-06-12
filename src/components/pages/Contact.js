import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
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
      console.log({ name, email, message });
    }
  };

  return (
    <div className="contact-page"> {/* Add the contact-page class to the parent container */}
      <div className="contact-container">
        <p></p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-name">
                <input type="text" id="name" name="name" value={name} onChange={handleInputChange} required placeholder="Name" />
              </div>
              <div className="input-email">
                <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required placeholder="Email" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" value={message} onChange={handleInputChange} required placeholder="Message"></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="form-submit">Send</button>
        </form>

        <div className="contact-details">
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          <p><strong>Phone:</strong> +1 123-456-7890</p>
          <p><strong>Email:</strong> email@example.com</p>
          <p><strong>Github:</strong> <a href="https://github.com/your-username">github.com/your-username</a></p>
        </div>
      </div>
    </div>
  );
}
