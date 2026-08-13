"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

type SubmissionState = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function LeadForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/leads/free-massage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          website: formData.get("website"),
          pageUrl: window.location.href,
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We could not send your request.");
      }

      window.fbq?.("track", "Lead", {
        content_name: "Free Chiropractic Massage",
        content_category: "Chiropractic Offer",
      });

      setState("success");
      setMessage("Thanks! Our office will reach out soon to help schedule your visit.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please call (385) 382-4453.",
      );
    }
  }

  if (state === "success") {
    return (
      <div className={styles.formCard} role="status" aria-live="polite">
        <div className={styles.successIcon} aria-hidden="true">✓</div>
        <p className={styles.formEyebrow}>Request received</p>
        <h2>You&apos;re on the list.</h2>
        <p className={styles.successText}>{message}</p>
        <a className={styles.phoneButton} href="tel:+13853824453">
          Call the office
        </a>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.scarcity}>Only 5 spots available</div>
      <p className={styles.formEyebrow}>Free local offer</p>
      <h2>Claim Your Free Chiropractic Massage</h2>
      <p className={styles.formLead}>
        Enter your details and we&apos;ll contact you to schedule.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="lead-name">Your name</label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            minLength={2}
            maxLength={100}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="lead-phone">Mobile phone</label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(555) 555-5555"
            minLength={10}
            maxLength={30}
            required
          />
        </div>

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="lead-website">Website</label>
          <input id="lead-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <button className={styles.submitButton} type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending…" : "Claim Free Offer"}
        </button>

        <p className={styles.noCard}>No payment or card needed.</p>

        {state === "error" && (
          <p className={styles.error} role="alert" aria-live="assertive">
            {message}
          </p>
        )}

        <p className={styles.disclosure}>
          By submitting, you agree that Schraedel Chiropractic may call or text
          you about this request. Message and data rates may apply. Reply STOP to
          opt out. This form requests contact and does not automatically book an
          appointment.
        </p>
      </form>
    </div>
  );
}
