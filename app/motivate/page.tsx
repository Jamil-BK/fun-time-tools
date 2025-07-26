'use client';

import React, { useState } from 'react';

const quotes = [
  { text: "Believe in yourself and all that you are.", bg: '#FFD700', color: '#000' },
  { text: "Every day is a second chance.", bg: '#FF69B4', color: '#fff' },
  { text: "Push yourself, because no one else will.", bg: '#00CED1', color: '#000' },
  { text: "You are stronger than you think.", bg: '#FFA500', color: '#000' },
  { text: "Great things never come from comfort zones.", bg: '#32CD32', color: '#000' },
];

export default function MotivationPage() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [error, setError] = useState('');

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name to continue!');
      setSubmitted(false);
    } else {
      setSubmitted(true);
      setError('');
    }
  };

  // Shuffle to a random quote
  const shuffleQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);
  };

  // Styles
  const pageStyle = {
    backgroundColor: '#000',
    minHeight: '100vh',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center' as const,
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '36px',
    marginBottom: '20px',
    color: 'red',
  };

  const formStyle = {
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '240px',
    marginRight: '10px',
    backgroundColor: '#222',
    color: '#fff',
  };

  const buttonStyle = {
    padding: '10px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: '#E6E6FA',
    color: '#333',
    border: 'none',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: 'red',
    marginTop: '8px',
    fontWeight: 'bold',
  };

  const quoteBoxStyle = {
    backgroundColor: quotes[quoteIndex].bg,
    color: quotes[quoteIndex].color,
    padding: '30px',
    borderRadius: '15px',
    width: '80%',
    maxWidth: '500px',
    margin: '30px auto',
    fontSize: '20px',
    minHeight: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 15px #555',
  };

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>Your Daily Dose of Motivation</h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Inspire Me!</button>
        {error && <div style={errorStyle}>{error}</div>}
      </form>

      {/* Motivational Quote */}
      {submitted && (
        <>
          <div style={quoteBoxStyle}>
            {name}, {quotes[quoteIndex].text}
          </div>
          <button onClick={shuffleQuote} style={buttonStyle}>Give me more motivation!</button>
        </>
      )}
    </div>
  );
}
