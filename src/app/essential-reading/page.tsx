import { Shell } from "../components";

const folders = [
  {
    name: "Success Stories",
    href: "#success-stories",
    items: "7 items",
    updated: "Dec 31, 2024",
    views: "10",
    favorites: "0",
    contributors: "Anthony Schraedel",
  },
  {
    name: "Sustainable Health",
    href: "#sustainable-health",
    items: "0 items",
    updated: "Jul 27, 2021",
    views: "2",
    favorites: "0",
    contributors: "Anthony Schraedel",
  },
];

export default function EssentialReadingPage() {
  return (
    <Shell>
      <section className="reading-hero">
        <p className="eyebrow">Files & Folders</p>
        <h1>Essential Reading</h1>
        <p>
          Use this area to upload files you wish to share with your users. You
          can manage who has access to your files and what they can do, such as
          view and download, upload items, and more.
        </p>
      </section>

      <section className="file-table" aria-label="Essential reading folders">
        <div className="file-row file-head">
          <span>Item name</span>
          <span>Last updated</span>
          <span>Views</span>
          <span>Favorites</span>
          <span>Contributors</span>
        </div>
        {folders.map((folder) => (
          <a className="file-row file-link" href={folder.href} key={folder.name}>
            <div>
              <strong>{folder.name}</strong>
              <small>{folder.items}</small>
            </div>
            <span>{folder.updated}</span>
            <span>{folder.views}</span>
            <span>{folder.favorites}</span>
            <span>{folder.contributors}</span>
          </a>
        ))}
      </section>

      <section className="reading-detail" id="success-stories">
        <h2>Success Stories</h2>
        <p>
          This section is ready for the seven patient stories from the Wix file
          share. The current Wix page lists the folder but does not expose the
          individual files publicly in the copied page view.
        </p>
      </section>

      <section className="reading-detail" id="sustainable-health">
        <h2>Sustainable Health</h2>
        <p>
          This folder is listed on the Wix site with zero public items. It is set
          up here so future reading files can be added without changing the page
          structure.
        </p>
      </section>
    </Shell>
  );
}
