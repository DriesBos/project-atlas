'use client';

import { useState, useEffect } from 'react';

export default function OhioInfo() {
  const [ohioTime, setOhioTime] = useState<string>('');

  useEffect(() => {
    // Update Ohio time every second
    const updateOhioTime = () => {
      const now = new Date();
      const ohioTimeString = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York', // Ohio is in Eastern Time Zone
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setOhioTime(ohioTimeString);
    };

    // Initial time update
    updateOhioTime();

    // Set up interval for time updates
    const timeInterval = setInterval(updateOhioTime, 1000); // Update every second

    // Cleanup interval on unmount
    return () => clearInterval(timeInterval);
  }, []);

  return <span>{ohioTime && `${ohioTime} Ohio`}</span>;
}
