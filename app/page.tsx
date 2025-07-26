'use client';

export default function HomePage() {

  const pageStyle: React.CSSProperties = {
    backgroundColor: '#000',
    minHeight: '100vh',
    textAlign: 'center',
    paddingTop: '80px',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '40px',
    marginBottom: '20px',
    color: 'red',
    fontWeight: 'bold',
  };

  // Line styles with different colors
  
  const lineStyles = [
    { color: '#FFA500' }, 
    { color: '#00FF7F' }, 
    { color: '#FF69B4' }, 
    { color: '#00BFFF', fontWeight: 'bold', marginTop: '25px' }, 
  ];


  const blinkingTextStyle: React.CSSProperties = {
    animation: 'blink 1.2s linear infinite',
    fontSize: '22px',
    margin: '5px 0',
  };


  const messages = [
    'Coffee counter is waiting',
    'Motivation dose loading',
    'Tip box of the day',
    'Explore. Smile. Repeat!',
  ];

  return (
    <>
      <main style={pageStyle}>
        <h2 style={titleStyle}>Welcome to Fun Time Tools</h2>

        {messages.map((text, index) => (
          <p
            key={index}
            style={{
              ...blinkingTextStyle,
              ...lineStyles[index],
            }}
          >
            {text}
          </p>
        ))}

      </main>


      <style>{`
        @keyframes blink {
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
}
