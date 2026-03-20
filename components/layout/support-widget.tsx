"use client";

import { useState } from "react";

import { BrandMark } from "@/components/shared/brand";

import styles from "./support-widget.module.scss";

export function SupportWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.widget}>
      {open ? (
        <div id="support-widget-prompt" className={styles.prompt}>
          <BrandMark className={styles.botMark} />
          <p>How can we help? We are here for merchants, partners, and operators.</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Dismiss support prompt"
          >
            ×
          </button>
        </div>
      ) : null}

      <button
        type="button"
        className={styles.launcher}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="support-widget-prompt"
      >
        <BrandMark className={styles.launcherMark} inverse />
        <span>Connect</span>
      </button>
    </div>
  );
}
