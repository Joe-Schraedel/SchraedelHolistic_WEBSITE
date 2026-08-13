import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import LeadForm from "./lead-form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Free Chiropractic Massage | Schraedel Chiropractic",
  description:
    "Request one of five complimentary chiropractic massage appointments at Schraedel Chiropractic in Farmington, Utah.",
};

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const hasValidPixelId = Boolean(pixelId && /^\d+$/.test(pixelId));

function MetaPixel() {
  if (!hasValidPixelId || !pixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

export default function FreeMassagePage() {
  return (
    <div className={styles.page}>
      <MetaPixel />

      <header className={styles.brandBar}>
        <Link className={styles.brand} href="/" aria-label="Schraedel Chiropractic home">
          <Image
            src="/assets/logo.jpg"
            alt=""
            width={42}
            height={42}
            className={styles.logo}
          />
          <span>
            <strong>Schraedel Chiropractic</strong>
            <small>Farmington, Utah</small>
          </span>
        </Link>
        <a className={styles.callLink} href="tel:+13853824453">
          Call (385) 382-4453
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.intro}>
            <div className={styles.offerLabel}>Complimentary local offer</div>
            <h1>Take a little tension off your shoulders.</h1>
            <p className={styles.lede}>
              Request a free chiropractic massage at Schraedel Chiropractic in
              Farmington. We&apos;ll reach out personally to find a time that works.
            </p>
            <div className={styles.heroImage}>
              <Image
                src="/assets/free-massage-hero.jpg"
                alt="A woman relaxing at home after easing shoulder tension"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 56vw"
              />
              <div className={styles.imageNote}>
                <span aria-hidden="true">✓</span>
                Calm, thoughtful local care
              </div>
            </div>
          </div>

          <div className={styles.formColumn}>
            <LeadForm />
          </div>
        </section>

        <section className={styles.steps} aria-labelledby="what-happens-heading">
          <div className={styles.sectionIntro}>
            <span>Simple from here</span>
            <h2 id="what-happens-heading">What happens next?</h2>
          </div>
          <ol className={styles.stepGrid}>
            <li>
              <span>1</span>
              <div>
                <h3>Send your request</h3>
                <p>Share your name and phone number. That&apos;s all we need.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <h3>We&apos;ll reach out</h3>
                <p>Our office will contact you to answer questions and find a time.</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <h3>Come in and unwind</h3>
                <p>Visit our calm, local Farmington office for your appointment.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className={styles.trust}>
          <div>
            <span className={styles.kicker}>Schraedel Chiropractic</span>
            <h2>Care that starts by listening.</h2>
          </div>
          <p>
            Our Farmington office is built around clear conversations, thoughtful
            care, and recommendations explained without pressure.
          </p>
          <address>
            117 W 200 S<br />
            Farmington, UT 84025
          </address>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Schraedel Chiropractic</span>
        <a href="https://www.schraedelchiro.com/privacy-policy">Privacy Policy</a>
      </footer>
    </div>
  );
}
