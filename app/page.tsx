'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [timestamp, setTimestamp] = useState(Date.now());

  // Automatically refresh the image tag every second to bypass browser cache
  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#111',
      margin: 0
    }}>
      <img 
        src={`/latest-card.png?t=${timestamp}`} 
        alt="Waiting for card..." 
        style={{ maxWidth: '300px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
      />
    </main>
  );
}
