"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

import { industryWords, merchantCards, partnerCards } from "@/content/site";
import { BrandLockup, BrandMark } from "@/components/shared/brand";
import { TransitionLink } from "@/components/shared/transition-link";

import styles from "./intro-hero.module.scss";

type Audience = "partners" | "merchants";

const toneClassNames = {
  orange: styles.toneOrange,
  midnight: styles.toneMidnight,
  slate: styles.toneSlate,
  lemon: styles.toneLemon,
  darkSlate: styles.toneDarkSlate,
  chalk: styles.toneChalk,
  restaurant: styles.toneRestaurant,
  retail: styles.toneRetail,
  commerce: styles.toneCommerce
};

export function IntroHero() {
  const [audience, setAudience] = useState<Audience>("partners");
  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(industryWords[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullWord = industryWords[wordIndex];
    const frame = deleting
      ? fullWord.slice(0, Math.max(displayWord.length - 1, 0))
      : fullWord.slice(0, displayWord.length + 1);

    const timeout = window.setTimeout(
      () => {
        setDisplayWord(frame);

        if (!deleting && frame === fullWord) {
          window.setTimeout(() => setDeleting(true), 950);
          return;
        }

        if (deleting && frame.length === 0) {
          setDeleting(false);
          setWordIndex((index) => (index + 1) % industryWords.length);
        }
      },
      deleting ? 44 : 88
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, displayWord.length, wordIndex]);

  const cards = audience === "partners" ? partnerCards : merchantCards;

  return (
    <section className="site-section">
      <div className="site-container">
        <div className={styles.heroSurface}>
          <div className={styles.heroCopy}>
            <div className={styles.brandRibbon}>
              <BrandLockup withTagline />
              <p className={styles.ribbonNote}>
                FOR THE
                <span className="script-accent"> next era </span>
                OF GROWTH
              </p>
            </div>

            <h1 className={clsx("display-title", styles.title)}>
              Payment solutions for{" "}
              <span className={styles.typeLine}>
                {displayWord}
                <span className={styles.cursor}>|</span>
              </span>
            </h1>

            <p className={styles.copy}>
              Empowering growth-minded partners and ambitious businesses with
              next-gen payments, sharper support, and a cleaner operating stack.
            </p>

            <div className={styles.heroActions}>
              <TransitionLink href="/connect" className="pill-button primary">
                Start the conversation
              </TransitionLink>
              <TransitionLink href="/why" className="pill-button secondary">
                Explore the model
              </TransitionLink>
            </div>

            <div className={styles.pulseStrip}>
              <div>
                <BrandMark className={styles.stripMark} />
                <span>Partner-first growth</span>
              </div>
              <div>
                <BrandMark className={styles.stripMark} />
                <span>Modern merchant stack</span>
              </div>
              <div>
                <BrandMark className={styles.stripMark} />
                <span>Responsive human support</span>
              </div>
            </div>

            <a href="#overview" className={styles.scrollCue}>
              <span>Scroll</span>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M10 1v16m0 0-6-6m6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </a>
          </div>

          <div className={styles.heroTabs}>
            <div className={styles.tabBar}>
              <button
                type="button"
                className={clsx(styles.tabButton, audience === "partners" && styles.tabActive)}
                onClick={() => setAudience("partners")}
              >
                Partner with us
              </button>
              <button
                type="button"
                className={clsx(styles.tabButton, audience === "merchants" && styles.tabActive)}
                onClick={() => setAudience("merchants")}
              >
                Own a business?
              </button>
            </div>

            <div className={styles.cardGrid}>
              {cards.map((card) => (
                <TransitionLink
                  key={`${audience}-${card.title}`}
                  href={card.href}
                  className={clsx(styles.card, toneClassNames[card.tone])}
                >
                  {card.badge ? <span className={styles.cardBadge}>{card.badge}</span> : null}
                  <div className={styles.cardContent}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </TransitionLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
