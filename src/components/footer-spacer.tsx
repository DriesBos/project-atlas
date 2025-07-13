'use client';

import { useEffect } from 'react';

export default function FooterSpacer() {
  useEffect(() => {
    const setFooterSpacerHeight = () => {
      const footer = document.querySelector('footer');
      const footerSpacer = document.querySelector('.footerSpacer');

      if (footer && footerSpacer) {
        const footerHeight = footer.offsetHeight;
        (footerSpacer as HTMLElement).style.height = `${footerHeight}px`;
      }
    };

    // Set height on load
    setFooterSpacerHeight();

    // Optional: Update on window resize in case footer height changes
    window.addEventListener('resize', setFooterSpacerHeight);

    return () => {
      window.removeEventListener('resize', setFooterSpacerHeight);
    };
  }, []);

  return <div className="footerSpacer" />;
}
