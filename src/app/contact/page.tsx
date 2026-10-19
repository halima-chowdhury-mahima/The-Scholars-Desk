
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("");
    setError(false);
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your enquiry. Please try again."
        );
      }

      setStatus(result.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setError(true);
      setStatus(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="contact-page">
      <div className="contact-container">
        <Link href="/" className="contact-back">
          ← Return to homepage
        </Link>

        <section className="contact-card">
          <p className="contact-eyebrow">LET&apos;S TALK</p>

          <h1>Tell us about your project.</h1>

          <p className="contact-intro">
            Share your requirements and the support you are looking
            for. We&apos;ll help you understand the next steps.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="name">Full name *</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your full name"
                maxLength={150}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email address *</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                maxLength={254}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="subject">What do you need help with?</label>
              <select
                id="subject"
                name="subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              >
                <option value="">Choose a service</option>
                <option value="Dissertation Support">
                  Dissertation Support
                </option>
                <option value="Thesis Guidance">Thesis Guidance</option>
                <option value="Assignment Support">
                  Assignment Support
                </option>
                <option value="Research Support">Research Support</option>
                <option value="Editing & Proofreading">
                  Editing &amp; Proofreading
                </option>
                <option value="Referencing & Formatting">
                  Referencing &amp; Formatting
                </option>
                <option value="Other Enquiry">Other Enquiry</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Tell us about your project *</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Share your requirements, deadline and questions..."
                rows={6}
                maxLength={10000}
                required
              />
            </div>

            {status && (
              <div
                className={`contact-status ${
                  error ? "contact-status-error" : "contact-status-success"
                }`}
                role="status"
                aria-live="polite"
              >
                {status}
              </div>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >
              {loading ? "Sending enquiry..." : "Send Your Enquiry"}
              {!loading && <span>↗</span>}
            </button>

            <p className="contact-privacy">
              Your details will be used to respond to your enquiry.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
