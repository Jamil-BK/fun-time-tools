'use client';
import React, { useState } from 'react';

// ✅ Define a type for each tip object
type TipData = {
  text: string;
  bg: string;
  color: string;
};

// ✅ Define a type for the whole tips object
const tips: { [key: string]: TipData } = {
  kindness: {
    text: "Kindness is a language that even the deaf can hear and the blind can see. Share it generously every day.",
    bg: '#FFD700',
    color: '#000000',
  },
  health: {
    text: "Drink water, move your body, and rest well. Small habits lead to big changes.",
    bg: '#FF69B4',
    color: '#000000',
  },
  study: {
    text: "Study in short focused bursts. Take breaks. Repeat. Your brain loves patterns.",
    bg: '#87CEEB',
    color: '#000000',
  },
  time: {
    text: "Guard your time like treasure. Plan your hours and make room for rest.",
    bg: '#FFA500',
    color: '#000000',
  },
  confidence: {
    text: "Confidence isn’t being right, it’s being okay with being wrong and trying anyway.",
    bg: '#00FA9A',
    color: '#000000',
  },
  friendship: {
    text: "True friends celebrate your wins and hold your hand in silence during storms.",
    bg: '#BA55D3',
    color: '#ffffff',
  },
  creativity: {
    text: "Creativity grows when you stop fearing mistakes. Make a mess. Make magic.",
    bg: '#20B2AA',
    color: '#ffffff',
  },
  positivity: {
    text: "Every day may not be good, but there is something good in every day.",
    bg: '#7CFC00',
    color: '#000000',
  },
  selfcare: {
    text: "Self-care is not selfish. It’s survival. Pause, breathe, and refill your cup.",
    bg: '#DC143C',
    color: '#ffffff',
  },
  motivation: {
    text: "Don’t wait for motivation. Start moving, and motivation will find you.",
    bg: '#1E90FF',
    color: '#ffffff',
  },
};


export default function TipBoxPage() {
  // activeTip saves the currently selected tip

  const [activeTip, setActiveTip] = useState<string | null>(null);

  // This message shows when no tip is selected
  const defaultMessage = "Click any button above for the respective tips.";


  // When you click a button, it shows or hides the tip
  const toggleTip = (category: string) => {
    setActiveTip((prev) => (prev === category ? null : category));
  };


  // This makes all 10 buttons
  const renderButtons = () => {
    return Object.keys(tips).map((key) => (
      <div key={key} style={{ display: 'inline-block', margin: '8px' }}>
        <button
          onClick={() => toggleTip(key)}
          style={{
            backgroundColor: activeTip === key ? '#ffffff' : '#333333',
            color: activeTip === key ? '#333333' : '#ffffff',
            padding: '8px 14px',
            fontSize: '13px',
            fontWeight: 'bold',
            borderRadius: '10px',
            border: '1px solid #aaa',
            minWidth: '140px',
            cursor: 'pointer',
            transition: '0.3s',
          }}
        >
          {activeTip === key ? `Hide ${key} Tip` : `Show ${key} Tip`}
        </button>
      </div>
    ));
  };


  // Style for the main tip box
  const tipStyle: React.CSSProperties = {
    backgroundColor: activeTip ? tips[activeTip].bg : '#fff8dc',
    color: activeTip ? tips[activeTip].color : '#222',
    minHeight: '150px',
    maxWidth: '700px',
    margin: '30px auto',
    padding: '30px',
    borderRadius: '15px',
    fontSize: '20px',
    fontWeight: 500,
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
    border: '2px dashed #999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };


  return (
    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#FFD700', marginBottom: '25px' }}>💡 Tip Box of the Day</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
        {renderButtons()}
      </div>
      

      <div style={tipStyle}>
        {activeTip ? tips[activeTip].text : defaultMessage}
      </div>
    </div>
  );
}
