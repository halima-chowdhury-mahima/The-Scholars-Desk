"use client";

import { useState } from "react";

type SocialLinksProps = {
  location?: "navbar" | "footer";
};

export default function SocialLinks({
  location = "footer",
}: SocialLinksProps) {
  const [facebookUrl] = useState(
    "https://www.facebook.com/YOUR_FACEBOOK_PAGE"
  );
  const [instagramUrl] = useState(
    "https://www.instagram.com/YOUR_INSTAGRAM_PAGE/"
  );

  return (
    <div className={`social-links social-links-${location}`}>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Facebook page"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
        </svg>
        <span>Facebook</span>
      </a>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Instagram profile"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.8" r="1.2" />
        </svg>
        <span>Instagram</span>
      </a>
    </div>
  );
}