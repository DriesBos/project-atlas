'use client';

import { useState } from 'react';

export function Subscribe() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Clear the email input immediately
    event.target.reset();

    // Set submitted state
    setIsSubmitted(true);

    // Reset submitted state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);

    await fetch('/__form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    });
    // Success and error handling ...
  };

  return (
    <>
      {!isSubmitted ? (
        <form name="contact" onSubmit={handleFormSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <input
            name="email"
            type="text"
            placeholder="Your email address"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thank you!</p>
      )}
    </>
  );
}
