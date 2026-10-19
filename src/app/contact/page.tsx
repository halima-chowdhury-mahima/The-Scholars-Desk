
"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan") ?? "";
  const selectedService = searchParams.get("service") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState(
    selectedService || selectedPlan
      ? `Interested in: ${selectedService || selectedPlan}`
      : ""
  );
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <Link href="/" className="brand">
  <Image
    src="/images/logo.png"
    alt="The Scholar's Desk Logo"
    width={70}
    height={70}
    className="brand-logo"
    priority
  />

  <div className="brand-text">
    <h1>The Scholar&apos;s Desk</h1>
    <p>ACADEMIC SUPPORT &amp; GUIDANCE</p>
  </div>
</Link>

      <section className="contact-panel">
        <div className="contact-intro">
          <p className="eyebrow">LET&apos;S TALK</p>
          <h1>Tell us about your project.</h1>
          <p>
            Share your requirements and the support you are
            looking for. We&apos;ll help you understand the next steps.
          </p>
        </div>
        

        {submitted ? (
          <div className="form-success" role="status">
            <h2>Thank you, {name}.</h2>
            <p>
              Your form has been completed in this demo.
              No message has been sent yet. Connect a backend
              or email service to receive real enquiries.
            </p>
            <button
              type="button"
              className="button-navy"
              onClick={() => setSubmitted(false)}
            >
              Edit Your Details
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your full name"
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />

            <label htmlFor="project">Service or plan</label>
            <select
              id="project"
              name="project"
              value={project}
              onChange={(event) => setProject(event.target.value)}
              required
            >
              <option value="">Select a service or plan</option>
              <option value="dissertation">Dissertation Support</option>
              <option value="thesis">Thesis Guidance</option>
              <option value="assignment">Assignment Support</option>
              <option value="research">Research Support</option>
              <option value="editing">Editing & Proofreading</option>
              <option value="referencing">Referencing & Formatting</option>
              <option value="basic">Basic Plan</option>
              <option value="standard">Standard Plan</option>
              <option value="premium">Premium Plan</option>
            </select>

            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell us about your requirements..."
              required
            />

            <button type="submit" className="button-gold">
              Submit Enquiry <span>→</span>
            </button>

            <p className="form-disclaimer">
              Please do not include passwords, student ID numbers
              or other sensitive personal information.
            </p>
          </form>

          
        )}
      </section>

      <Link href="/" className="contact-back">
        ← Return to homepage
      </Link>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<main className="contact-page">Loading...</main>}>
      <ContactForm />
    </Suspense>
  );
}
