import styles from "./page.module.css";

const careFocus = [
  "Spinal alignment and posture correction",
  "Mobility work for neck, back, and hips",
  "Nervous-system aware treatment planning",
  "Simple at-home exercises that fit your week",
];

const steps = [
  {
    title: "Book in minutes",
    description:
      "Choose a time, share a few symptoms, and reserve your first visit without paperwork friction.",
  },
  {
    title: "Get a clear plan",
    description:
      "At your first appointment, we map what is happening, explain why, and define practical next steps.",
  },
  {
    title: "Feel progress fast",
    description:
      "Each session focuses on measurable relief, better movement, and confident long-term maintenance.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.brand}>Schraedel Holistic</p>
        <a className={styles.linkButton} href="#book">
          Book Appointment
        </a>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Holistic Chiropractic Care</p>
          <h1>Move better, hurt less, and get your energy back.</h1>
          <p className={styles.lead}>
            Friendly, growth-focused care built for real life. No overwhelm, no
            jargon, and no complicated intake process.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="#book">
              Schedule Your First Visit
            </a>
            <a className={styles.secondaryCta} href="tel:+18015551234">
              Call (801) 555-1234
            </a>
          </div>

          <div className={styles.proofBar}>
            <p>Same-week appointments</p>
            <p>Personalized treatment plans</p>
            <p>Supportive follow-up care</p>
          </div>
        </section>

        <section className={styles.gridSection}>
          <article className={styles.card}>
            <h2>What We Treat</h2>
            <ul>
              {careFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className={styles.card}>
            <h2>Why Patients Stay</h2>
            <p>
              We keep care simple and collaborative. You always know what the
              session is for, what to do between visits, and what improvement to
              expect next.
            </p>
            <p>
              That clarity creates momentum and helps patients stay consistent.
            </p>
          </article>
        </section>

        <section className={styles.processSection}>
          <h2>Low-Friction Process</h2>
          <div className={styles.stepGrid}>
            {steps.map((step, index) => (
              <article key={step.title} className={styles.stepCard}>
                <p className={styles.stepNumber}>0{index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="book" className={styles.bookingSection}>
          <div>
            <p className={styles.eyebrow}>Start Here</p>
            <h2>Ready for a modern chiropractic experience?</h2>
            <p>
              Request your first visit and we will follow up with scheduling
              options that fit your week.
            </p>
          </div>
          <a className={styles.primaryCta} href="mailto:hello@schraedelholistic.com">
            Request Appointment
          </a>
        </section>
      </main>
    </div>
  );
}
