import Link from "next/link";
import { conditions, holisticReasons, site } from "./content";
import { Shell } from "./components";

const telHref = `tel:${site.phone.replace(/\D/g, "")}`;

export default function Home() {
  return (
    <Shell>
      <section className="hero">
        <img src="/assets/hero-clinic.jpg" alt="" />
        <div className="hero-copy">
          <p>See Great Results</p>
          <h1>Book Online Today for Your Complimentary Consult With the Doctor</h1>
          <p>If we can&apos;t help you, we&apos;ll let you know who can.</p>
          <a
            className="button primary"
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book Consult Here
          </a>
        </div>
      </section>

      <section id="who-we-help" className="section">
        <div className="section-heading">
          <p>Who We Help</p>
          <h2>Conditions We See Great Results With:</h2>
        </div>
        <div className="condition-grid">
          {conditions.map((condition) => (
            <article className="condition-card" key={condition.title}>
              <img src={condition.image} alt="" />
              <div>
                <h3>{condition.title}</h3>
                <p>{condition.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="meet-the-doc" className="split-section">
        <img src="/assets/dr-schraedel-home.jpg" alt="Dr. Anthony Schraedel" />
        <div>
          <p className="eyebrow">Meet Dr. Anthony Schraedel</p>
          <h2>Dedicated to Your Holistic Wellness</h2>
          <p>
            Dr. Schraedel gained his love of health and care early on as a child.
            When Grammy, his grandmother, fell on a bus and was hurt, Tony wanted
            to someday be able to help her fix it. That began his ongoing desire
            to help others.
          </p>
          <p>
            His chiropractic path took him from studies at Washington State
            University to Palmer College of Chiropractic, where he completed his
            Doctorate of Chiropractic. Since then, his love for understanding has
            taken him into many methods of holistic care.
          </p>
          <Link className="button secondary" href="/dr-schraedel-bio">
            Read More
          </Link>
        </div>
      </section>

      <section id="why-holistic" className="section muted">
        <div className="section-heading">
          <p>Why Naturopathy</p>
          <h2>Why Choose Holistic Chiropractic?</h2>
          <span>Our Holistic Chiropractic Care Can Help with</span>
        </div>
        <div className="reason-grid">
          {holisticReasons.map((reason) => (
            <article key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial">
        <h2>Success Stories</h2>
        <blockquote>
          &quot;Is this really going to work? My knees hurt all the time and it made
          me really sad. I thought that it wasn&apos;t able to be fixed without
          surgery and now, they&apos;re all better. So, thank you, Dr. Schraedel.&quot;
        </blockquote>
        <p>- Hope S.</p>
        <Link className="button secondary" href="/essential-reading">
          Read More Stories
        </Link>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-grid">
          <article>
            <h3>Phone</h3>
            <a href={telHref}>
              {site.displayPhone}
            </a>
          </article>
          <article>
            <h3>Email</h3>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </article>
          <article>
            <h3>Address</h3>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer">
              117 S 200 W Farmington UT
            </a>
          </article>
        </div>
      </section>
    </Shell>
  );
}
