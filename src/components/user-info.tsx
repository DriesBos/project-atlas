'use client';

import { useState, useEffect } from 'react';

export default function UserInfo() {
  const [time, setTime] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    // Initial time update
    updateTime();

    // Set up interval for time updates
    const timeInterval = setInterval(updateTime, 1000); // Update every second

    // Get user's timezone and approximate location
    const getLocationInfo = () => {
      try {
        // Get timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Extract city from timezone (e.g., "America/New_York" -> "New York")
        const city = timezone.split('/').pop()?.replace('_', ' ') || 'Unknown';

        setLocation(city);
      } catch (error) {
        console.log('Failed to get location info:', error);
        setLocation('Unknown');
      }
    };

    getLocationInfo();

    // Cleanup interval on unmount
    return () => clearInterval(timeInterval);
  }, []);

  return <span>{time && location && `${time} ${location}`}</span>;
}
