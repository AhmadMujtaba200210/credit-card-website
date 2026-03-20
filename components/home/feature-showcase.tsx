import { TransitionLink } from "@/components/shared/transition-link";

import styles from "./feature-showcase.module.scss";

export function FeatureShowcase() {
  return (
    <section id="overview" className="site-section">
      <div className="site-container">
        <div className={styles.grid}>
          <article className={styles.featureOrange}>
            <div className={styles.visualEdge}>
              <div className={styles.edgeMark}>NX</div>
              <div className={styles.edgeOrbit} />
            </div>
            <div className={styles.copy}>
              <p className="eyebrow">Growth Program</p>
              <h2>NEXEDGE helps ambitious partners build faster, cleaner portfolios.</h2>
              <p>
                For teams that want more control over pricing strategy, equipment,
                and merchant rollout, our flagship growth framework combines margin
                flexibility with a modern operating stack.
              </p>
              <TransitionLink href="/why#programs" className="text-link">
                Explore the model
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="m8 4 6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </TransitionLink>
            </div>
          </article>

          <article className={styles.featureDark}>
            <div className={styles.copy}>
              <p className="eyebrow">Partner Promise</p>
              <h2>We stay aligned with the people growing the business.</h2>
              <p>
                PAYNEXPRO is built around partner enablement, not channel conflict.
                That means cleaner communication, predictable support, and a team
                that helps your portfolio expand instead of competing against it.
              </p>
            </div>

            <div className={styles.metrics}>
              <div>
                <strong>3x</strong>
                <span>faster launch playbooks</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>support routing coverage</span>
              </div>
              <div>
                <strong>1</strong>
                <span>shared system for ops, billing, and reporting</span>
              </div>
            </div>
          </article>

          <div className={styles.utilityGrid}>
            <article id="platform" className={styles.utilityCard}>
              <p className="eyebrow">Smart POS</p>
              <h3>Platform-ready checkout for fast-moving operators.</h3>
              <p>
                Handhelds, countertop devices, tableside flow, and cleaner reporting for
                operators who need speed without giving up control.
              </p>
            </article>

            <article id="equipment" className={styles.utilityCard}>
              <p className="eyebrow">Equipment</p>
              <h3>Purpose-fit hardware footprints for every environment.</h3>
              <p>
                Mobile, countertop, or unattended device mixes configured around the way
                your business actually runs.
              </p>
            </article>

            <article id="software" className={styles.utilityCard}>
              <p className="eyebrow">Software</p>
              <h3>More than transactions: invoicing, billing, and visibility.</h3>
              <p>
                Use one cleaner layer for links, recurring billing, reporting, and
                operational visibility across locations.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
