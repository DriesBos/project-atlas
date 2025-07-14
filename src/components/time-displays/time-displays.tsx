'use client';

import { useState, useEffect } from 'react';

interface TimeDisplaysProps {
  className?: string;
}

export default function TimeDisplays({ className }: TimeDisplaysProps) {
  const [userTime, setUserTime] = useState<string>('');
  const [userLocation, setUserLocation] = useState<string>('');
  const [ohioTime, setOhioTime] = useState<string>('');

  useEffect(() => {
    // Update both times every second
    const updateTimes = () => {
      const now = new Date();

      // User's local time
      setUserTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );

      // Ohio time
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
    updateTimes();

    // Set up interval for time updates
    const timeInterval = setInterval(updateTimes, 1000);

    // Get user's timezone and approximate location
    const getLocationInfo = () => {
      try {
        // Get timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Extract city from timezone (e.g., "America/New_York" -> "New York")
        const city = timezone.split('/').pop()?.replace('_', ' ') || 'Unknown';

        setUserLocation(city);
      } catch (error) {
        console.log('Failed to get location info:', error);
        setUserLocation('Unknown');
      }
    };

    getLocationInfo();

    // Cleanup interval on unmount
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className={className}>
      <p>
        {userTime && userLocation && `${userTime} ${userLocation}`} ——{' '}
        {ohioTime && `${ohioTime} Ohio`}
      </p>
    </div>
  );
}
