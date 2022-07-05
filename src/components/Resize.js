import React, { useState, useEffect } from 'react';

const Resize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth < 768;

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <div>
      <h1>{windowWidth}</h1>
      {isMobile && <h2>Show only mobile device</h2>}
    </div>
  );
};

export default Resize;
