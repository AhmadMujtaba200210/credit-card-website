"use client";

import { useState } from "react";

import { testimonials } from "@/content/site";

import styles from "./testimonials.module.scss";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section className="site-section">
      <div className="site-container">
        <div className={styles.wrapper}>
          <div className="section-heading">
            <h2 className="display-title">
              We stay in your corner, <span className="accent-underline">every step</span>{" "}
              of the way.
            </h2>
            <p>
              The tone is simple: responsive people, clear communication, and
              execution that feels deliberate instead of improvised.
            </p>
          </div>

          <div className={styles.carousel}>
            <div className={styles.stars}>★★★★★</div>
            <blockquote>{active.quote}</blockquote>
            <div className={styles.authorBlock}>
              <strong>{active.author}</strong>
              <span>{active.company}</span>
            </div>

            <div className={styles.controls}>
              <button
                type="button"
                onClick={() =>
                  setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
                }
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
