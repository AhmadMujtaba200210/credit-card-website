import { primaryNav } from "@/content/site";
import { BrandLockup } from "@/components/shared/brand";
import { TransitionLink } from "@/components/shared/transition-link";

import styles from "./site-footer.module.scss";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="site-container">
        <div className={styles.panel}>
          <div className={styles.ctaBlock}>
            <p className={styles.scriptLine}>Ready for something sharper?</p>
            <h2 className="display-title">Build the payment experience your brand deserves.</h2>
            <TransitionLink href="/connect" className={`pill-button primary ${styles.ctaButton}`}>
              Start a conversation
            </TransitionLink>
          </div>

          <div className={styles.navGrid}>
            <div className={styles.navColumn}>
              <span className={styles.columnTitle}>Main</span>
              {primaryNav.map((item) => (
                <TransitionLink key={item.href} href={item.href}>
                  {item.label}
                </TransitionLink>
              ))}
            </div>

            <div className={styles.navColumn}>
              <span className={styles.columnTitle}>Solutions</span>
              <TransitionLink href="/why#pricing">Pricing strategy</TransitionLink>
              <TransitionLink href="/#platform">Smart POS</TransitionLink>
              <TransitionLink href="/#software">Software stack</TransitionLink>
            </div>

            <div className={styles.navColumn}>
              <span className={styles.columnTitle}>Support</span>
              <TransitionLink href="/connect#support">Client support</TransitionLink>
              <TransitionLink href="/connect#partners">Partner onboarding</TransitionLink>
              <TransitionLink href="/connect#sales">Sales conversations</TransitionLink>
            </div>
          </div>

          <div className={styles.bottomBar}>
            <BrandLockup className={styles.brandLockup} inverse withTagline />

            <div className={styles.legal}>
              <span>PAYNEXPRO © 2026. All rights reserved.</span>
              <span>Built for a three-page launch with room to expand.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
