import { PageHero } from "@/components/shared/page-hero";
import { TransitionLink } from "@/components/shared/transition-link";
import { whyPrinciples } from "@/content/site";

import styles from "./page.module.scss";

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner-first positioning"
        title="Why"
        accent="PAYNEXPRO?"
        description="We combine modern payment tools with a cleaner operating model: better alignment, clearer communication, and support that actually behaves like an extension of your team."
        tone="orange"
      />

      <section className="site-section" id="programs">
        <div className="site-container">
          <div className={styles.statsGrid}>
            <article>
              <strong>01</strong>
              <h2>Channel alignment</h2>
              <p>
                Growth plans are built to reinforce your pipeline, not compete with it.
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h2>Sharper economics</h2>
              <p>
                Pricing conversations stay strategic, with support for dual pricing,
                cost-plus, and fit-for-model rollout plans.
              </p>
            </article>
            <article>
              <strong>03</strong>
              <h2>Operational lift</h2>
              <p>
                Terminals, reporting, invoicing, and support handoffs are designed to
                feel like one system instead of disconnected tools.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className={styles.storyPanel}>
            <div className={styles.storyCopy}>
              <p className="eyebrow">How we work</p>
              <h2 className="display-title">Discover, structure, launch, and stay close.</h2>
              <p>
                The difference is not just the technology. It is the operating rhythm
                around it: better discovery, better rollout planning, and better support
                once a merchant is live.
              </p>
            </div>

            <div className={styles.storyStack}>
              <article>
                <strong>01</strong>
                <h3>Discover</h3>
                <p>Merchant type, current stack, growth plan, and pricing fit.</p>
              </article>
              <article>
                <strong>02</strong>
                <h3>Structure</h3>
                <p>Build the right combination of pricing, hardware, software, and support.</p>
              </article>
              <article>
                <strong>03</strong>
                <h3>Launch</h3>
                <p>Install cleanly, train confidently, and keep the handoff visible.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className={styles.principlesWrap}>
            <div className="section-heading">
              <h2 className="display-title">
                The model behind the <span className="accent-underline">promise</span>
              </h2>
              <p>
                This is the part that matters long after the homepage pitch: the way the
                service is structured, launched, and supported.
              </p>
            </div>

            <div className={styles.principlesGrid}>
              {whyPrinciples.map((principle) => (
                <article key={principle.title} className={styles.principleCard}>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="pricing">
        <div className="site-container">
          <div className={styles.band}>
            <div>
              <p className="eyebrow">Pricing Strategy</p>
              <h2>Every deployment starts with fit, not a template.</h2>
            </div>
            <p>
              PAYNEXPRO helps operators choose between cost-plus, fee-offset, or
              blended pricing structures without forcing the same answer on every
              account.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section" id="support">
        <div className="site-container">
          <div className={styles.ctaPanel}>
            <div>
              <p className={styles.scriptLine}>Need the full walkthrough?</p>
              <h2 className="display-title">Let us map the rollout with you.</h2>
            </div>
            <TransitionLink href="/connect" className="pill-button primary">
              Connect with the team
            </TransitionLink>
          </div>
        </div>
      </section>
    </>
  );
}
