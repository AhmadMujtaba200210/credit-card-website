import { PageHero } from "@/components/shared/page-hero";
import { contactChannels } from "@/content/site";

import styles from "./page.module.scss";

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Open the right conversation"
        title="Connect"
        accent="with the team"
        description="Whether you are evaluating a rollout, exploring a partner model, or need hands-on support, start here and we will route you clearly."
      />

      <section className="site-section">
        <div className="site-container">
          <div className={styles.channelGrid}>
            {contactChannels.map((channel) => (
              <article key={channel.title} id={channel.anchor} className={styles.channelCard}>
                <span className={styles.cardIndex}>0{contactChannels.indexOf(channel) + 1}</span>
                <h2>{channel.title}</h2>
                <p>{channel.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className={styles.contactLayout}>
            <form className={styles.formPanel}>
              <div>
                <p className="eyebrow">Start here</p>
                <h2>Tell us what you need.</h2>
              </div>

              <div className={styles.fieldGrid}>
                <input type="text" name="name" placeholder="Your name" />
                <input type="email" name="email" placeholder="Email address" />
              </div>

              <div className={styles.fieldGrid}>
                <input type="text" name="company" placeholder="Company or brand" />
                <input type="text" name="role" placeholder="How should we categorize this?" />
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your business, your timeline, or the support you need."
              />

              <button type="button" className="pill-button primary">
                Send the request
              </button>
            </form>

            <aside className={styles.sidePanel}>
              <div className={styles.sideCard}>
                <p className="eyebrow">Availability</p>
                <h3>Support routing</h3>
                <p>Monday to Friday, 8am to 6pm Eastern.</p>
              </div>

              <div className={styles.sideCard}>
                <p className="eyebrow">Launch planning</p>
                <h3>Merchant and partner onboarding</h3>
                <p>
                  Structured rollout support for hardware, pricing setup, reporting, and
                  post-live follow-through.
                </p>
              </div>

              <div className={styles.sideCard}>
                <p className="eyebrow">Preferred flow</p>
                <h3>Best response quality</h3>
                <p>
                  Tell us your merchant type, location count, current stack, and timeline
                  so we can route the conversation correctly.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className={styles.responsePanel}>
            <div className={styles.responseVisual}>
              <div className={styles.responseOrb} />
              <div className={styles.responseMark}>PN</div>
            </div>

            <div className={styles.responseCopy}>
              <p className="eyebrow">Response expectation</p>
              <h2 className="display-title">A clearer contact path makes better work happen faster.</h2>
              <p>
                Use one route for sales, one for partner onboarding, and one for support.
                That keeps conversations cleaner and follow-through tighter.
              </p>

              <div className={styles.contactMeta}>
                <div>
                  <span>Email</span>
                  <strong>hello@paynexpro.com</strong>
                </div>
                <div>
                  <span>Response window</span>
                  <strong>Usually within one business day</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
