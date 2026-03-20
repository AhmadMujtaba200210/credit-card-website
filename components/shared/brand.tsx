import clsx from "clsx";

import styles from "./brand.module.scss";

type BrandMarkProps = {
  className?: string;
  inverse?: boolean;
};

type BrandLockupProps = {
  className?: string;
  inverse?: boolean;
  withTagline?: boolean;
};

export function BrandMark({ className, inverse = false }: BrandMarkProps) {
  return (
    <span className={clsx(styles.mark, inverse && styles.inverse, className)} aria-hidden="true">
      <svg viewBox="0 0 96 96" role="img" focusable="false">
        <rect x="10" y="10" width="76" height="76" rx="24" className={styles.shell} />
        <path d="M30 55 49 36h15L45 55z" className={styles.primary} />
        <path d="M46 62 65 43h11L57 62z" className={styles.secondary} />
      </svg>
    </span>
  );
}

export function BrandLockup({
  className,
  inverse = false,
  withTagline = false
}: BrandLockupProps) {
  return (
    <div className={clsx(styles.lockup, inverse && styles.inverse, className)}>
      <BrandMark inverse={inverse} />
      <div className={styles.wording}>
        <strong>PAYNEXPRO</strong>
        {withTagline ? <span>Modern payments for ambitious operators.</span> : null}
      </div>
    </div>
  );
}
