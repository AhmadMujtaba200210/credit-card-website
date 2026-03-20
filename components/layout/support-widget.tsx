"use client";

import { useState } from "react";

import styles from "./support-widget.module.scss";

export function SupportWidget() {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.widget}>
      {open ? (
        <div className={styles.prompt}>
          <div className={styles.botMark}>PN</div>
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

      <button type="button" className={styles.launcher}>
        <span className={styles.launcherMark}>PN</span>
        <span>Connect</span>
      </button>
    </div>
  );
}
