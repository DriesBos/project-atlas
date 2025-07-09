'use client';

import { useState, useEffect } from 'react';

const ScreenInfo = () => {
  const [screenInfo, setScreenInfo] = useState({
    width: 0,
    height: 0,
    devicePixelRatio: 1,
  });

  useEffect(() => {
    const updateScreenInfo = () => {
      setScreenInfo({
        width: window.screen.width,
        height: window.screen.height,
        devicePixelRatio: window.devicePixelRatio || 1,
      });
    };

    // Initial update
    updateScreenInfo();

    // Listen for resize events (though screen dimensions rarely change)
    window.addEventListener('resize', updateScreenInfo);

    return () => {
      window.removeEventListener('resize', updateScreenInfo);
    };
  }, []);

  return (
    <>
      user-res: {screenInfo.width}×{screenInfo.height}
    </>
  );
};

export default ScreenInfo;
