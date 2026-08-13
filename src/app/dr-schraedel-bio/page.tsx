import Link from "next/link";
import { Shell } from "../components";
import { site } from "../content";

const telHref = `tel:${site.phone.replace(/\D/g, "")}`;

const credentials = [
  {
    date: "Dec 15, 1989",
    title: "D.C. Palmer College of Chiropractic",
    text: "Anthony E.C. Schraedel awarded degree of Doctor of Chiropractic.",
  },
  {
    date: "1999-2001, 2003-2005",
    title: "International College of Applied Kinesiology",
    text: "Recognized 6 years as a member by International College of Applied Kinesiology.",
  },
  {
    date: "January 2013",
    title: "Certified NET Practitioner",
    text: "An advanced method of chiropractic care utilized by Dr. Schraedel is Neuro-Emotional Technique.",
  },
];

export default function BioPage() {
  return (
    <Shell>
      <section className="page-hero bio-hero">
        <img src="/assets/bio-banner.jpg" alt="" />
        <div>
          <h1>Anthony Schraedel</h1>
          <p>Doctor of Chiropractic</p>
        </div>
      </section>

      <section className="bio-layout">
        <aside className="profile-panel">
          <img src="/assets/dr-schraedel-bio.jpg" alt="Anthony Schraedel" />
          <h2>Contact</h2>
          <dl>
            <dt>Phone:</dt>
            <dd>
              <a href={telHref}>{site.displayPhone}</a>
            </dd>
            <dt>Email:</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
            <dt>Address:</dt>
            <dd>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                {site.addressLong}
              </a>
            </dd>
            <dt>Date of Birth:</dt>
            <dd>Novermber 22nd, 1960</dd>
          </dl>
        </aside>

        <div className="article-copy">
          <h2>Bio</h2>
          <p>
            Dr. Schraedel gained his love of health and care early on as a child.
            When Grammy, his grandmother, fell on a bus and cut her nose,
            Anthony wanted to someday be able to help her fix it. This was the
            beginning of his ongoing desire to help others.
          </p>
          <p>
            He considered various roles and careers, from doctor to dentist, but
            ultimately chiropractic caught his eye. Having people leave the
            office feeling better than when they came in felt more aligned with
            who he was.
          </p>
          <p>
            Following chiropractic took him from Washington State University to
            Palmer College of Chiropractic, where he completed his Doctorate of
            Chiropractic. Since then his love for understanding has taken him to
            many more methods of holistic care.
          </p>
          <p>
            He has been in practice for 35 years. If you&apos;re looking for someone
            experienced to relate to your health goals, Dr. Schraedel has seen
            and treated people from many walks of life, with many unique
            conditions, with awesome results.
          </p>

          <h2>Experience, Certifications</h2>
          <div className="timeline">
            {credentials.map((item) => (
              <article key={item.date}>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <h2>Applied Kinesiology and NET</h2>
          <p>
            Dr. Schraedel heavily incorporates Applied Kinesiology in his
            chiropractic examination and care. A.K. utilizes assessments and
            muscle tests that correlate with neuron groupings within you. Using
            various tests, he can locate which vertebrae, organs, joints, or
            other aspects are in need of treatment.
          </p>
          <p>
            NET is a mind-body technique that uses a methodology of finding and
            removing neurological imbalances related to unresolved stress. It may
            help improve many behavioral and physical stress-related conditions.
          </p>

          <div className="connect-panel">
            <h2>Let&apos;s Connect</h2>
            <p>Hear from more patients on the Essential Reading page.</p>
            <Link className="button primary" href="/essential-reading">
              See other patients stories
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
