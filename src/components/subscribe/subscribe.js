'use client';

import { useState } from 'react';

export function Subscribe() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsError(false);

    const formData = new FormData(event.target);
    const email = formData.get('email');

    if (!email) {
      setMessage('Please enter a valid email address');
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setIsError(false);
        event.target.reset();
      } else {
        setMessage(data.error || 'Failed to subscribe. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Network error. Please try again.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
    // Reset form state after 5 seconds
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  return (
    <form
      name="contact"
      onSubmit={handleFormSubmit}
      data-response={message && message.length > 1 ? 'message' : 'default'}
      data-error={isError ? 'error' : 'default'}
    >
      <input type="hidden" name="form-name" value="contact" />
      {message && message.length > 1 ? (
        <p className="notificationText">{message}</p>
      ) : (
        <input
          name="email"
          type="email"
          placeholder="Your email address"
          required
          disabled={isLoading}
        />
      )}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
}
