import styles from "./page-hero.module.scss";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  tone?: "ink" | "orange";
};

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  tone = "ink"
}: PageHeroProps) {
  return (
    <section className="site-section">
      <div className="site-container">
        <div className={styles.hero}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className={`display-title ${styles.title}`}>
            {title} <span className={tone === "orange" ? styles.accentOrange : styles.accentInk}>{accent}</span>
          </h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
}
