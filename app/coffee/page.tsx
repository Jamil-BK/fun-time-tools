'use client';

import React, { useState, useEffect } from 'react';

const CoffeeCounterPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('coffeeCount');
    if (saved) {
      setCount(parseInt(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('coffeeCount', count.toString());
  }, [count]);

  const handleAddCup = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const getMessage = () => {
    if (count === 10) {
      return (
        <div style={messageBoxStyle}>
          <span style={{ color: 'red', fontWeight: 'bold', fontSize: '28px' }}>
            WOW!
          </span>
          <br />
          <span style={{ color: 'teal', fontWeight: 'bold', fontSize: '20px' }}>
            It’s 10 Cups!!
          </span>
        </div>
      );
    } else if (count > 10) {
      return (
        <div style={messageBoxStyle}>
          <span style={{ color: 'red', fontWeight: 'bold', fontSize: '26px' }}>
            WOW 10+ Cups!
          </span>
        </div>
      );
    } else {
      return null;
    }
  };

  const counterBoxStyle: React.CSSProperties = {
    backgroundColor: '#cc0000',
    padding: '40px',
    borderRadius: '10px',
    margin: '20px auto',
    textAlign: 'center',
    width: '220px',
  };

  const messageBoxStyle: React.CSSProperties = {
    backgroundColor: '#ccffff',
    padding: '25px',
    borderRadius: '10px',
    marginTop: '25px',
    width: '220px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'orange',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '14px',
    padding: '10px 14px',
    marginRight: '12px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  };

  const resetButtonStyle: React.CSSProperties = {
    backgroundColor: '#888',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    padding: '10px 14px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '30px', color: 'white' }}>

      {/* Page Title */}
      <h1 style={{ fontSize: '34px', fontWeight: 'bold', color: '#FFD700' }}>
        ☕ Coffee Counter ☕
      </h1>
      

      {/* Counter Title */}
      <h2 style={{ fontSize: '28px', marginTop: '10px' }}>
        Today<br /><span style={{ fontSize: '20px' }}>You Have</span>
      </h2>


      {/*  Red Count Box */}
      <div style={counterBoxStyle}>
        <span style={{ fontSize: '60px', fontWeight: 'bold', color: 'yellow' }}>{count}</span>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'white' }}>Cups of Coffee</div>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleAddCup} style={buttonStyle}>
          I had a cup of coffee ☕
        </button>
        <button onClick={handleReset} style={resetButtonStyle}>
          Reset Count
        </button>
      </div>

      {/* Special Message */}
      {getMessage()}
    </div>
  );
};


export default CoffeeCounterPage;
