import React, { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  // Regular expressions for validation
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ0-9.\-_ ]+$/;
  const emailRegex = /^([a-zA-Z0-9._\-]+|[a-zA-Z0-9]+(?:[._\-][a-zA-Z0-9]+)*)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const messageRegex = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ0-9., \-'_]+$/;

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameValid && emailValid && messageValid) {
      // Perform form submission or any other action here
      console.log('Form submitted successfully');
    } else {
      console.log('Form submission failed - validation errors');
    }
  };

  // Function to handle input change and validation for name field
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameValid(nameRegex.test(value));
  };

  // Function to handle input change and validation for email field
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(emailRegex.test(value));
  };

  // Function to handle input change and validation for message field
  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setMessageValid(messageRegex.test(value));
  };

console.log('name', name)
console.log('email', email)
console.log('message', message)

  

  return (
    <div className="w-full flex justify-center align-center py-36">
      <div className="connect-card text-center w-[40%] h-auto rounded-[100px] ease duration-700 p-32 flex flex-col items-center gap-[50px]" onSubmit={handleSubmit}>

            <div className="section-heading">
            <h2 className="text-[80px] pb-24 font-['overlock'] font-extrabold">Want to work on collaborate?</h2>
            <p className="text-7xl pb-[100px] leading-[100px] font-bold text-center">Throw me your ideas and let me see how i can be of assistance.</p>
            </div>

            <div className="inputField">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => {
                  handleNameChange(e);
                }}
                required
              />
              <span className="valid_info_name"></span>
            </div>

            <div className="inputField">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  handleEmailChange(e);
                }}
                required
              />
              <span className="valid_info_email"></span>
            </div>

            <div className="inputField">
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                value={message}
                onChange={(e) => {
                  handleMessageChange(e);
                }}
              ></textarea>
              <span className="valid_info_message"></span>
            </div>

            <div className="inputField btn">
              <button
                type="submit"
                id="form-submit"
                className="main-gradient-button rounded-[100px] px-[100px] py-[20px] text-[50px] cursor-pointer"
                disabled={!nameValid || !emailValid || !messageValid}
              >
                Send a message
              </button>
            </div>

      </div>
    </div>
  );
};

export default Contact;
