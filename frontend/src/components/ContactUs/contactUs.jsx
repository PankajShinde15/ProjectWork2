import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Mobile No: ${mobileNo}, Query: ${query}`);
    // You can replace console.log with your API call to submit the data
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="mobileNo">Mobile No:</label>
      <input
        type="tel"
        id="mobileNo"
        value={mobileNo}
        onChange={(event) => setMobileNo(event.target.value)}
      />

      <label htmlFor="query">Your Query:</label>
      <textarea
        id="query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
