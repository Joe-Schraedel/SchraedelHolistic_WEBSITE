import Link from "next/link";
import { nav, site } from "./content";

const telHref = `tel:${site.phone.replace(/\D/g, "")}`;

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-lockup" href="/">
          <img src="/assets/logo.jpg" alt="" />
          <span>{site.name}</span>
        </Link>
        <div className="header-meta">
          <a href={site.mapsUrl} target="_blank" rel="noreferrer">
            {site.address}
          </a>
          <a href={telHref}>{site.phone}</a>
        </div>
        <nav className="site-nav" aria-label="Site navigation">
          {nav.map((item) => (
            <Link key={item.href + item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p>{site.legal}</p>
        <p>Contact us:</p>
      </div>
      <div>
        <a href={telHref}>{site.phone}</a>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
