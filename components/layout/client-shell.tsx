"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

import { primaryNav } from "@/content/site";
import { SiteFooter } from "@/components/layout/site-footer";
import { SupportWidget } from "@/components/layout/support-widget";
import { TransitionNavigationProvider } from "@/components/layout/transition-navigation";
import { TransitionLink } from "@/components/shared/transition-link";

import styles from "./client-shell.module.scss";

type ClientShellProps = {
  children: React.ReactNode;
};

export function ClientShell({ children }: ClientShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [transitionState, setTransitionState] = useState<"intro" | "leaving" | "idle">(
    "intro"
  );

  const startTransitionNavigation = useCallback(
    (href: string) => {
      setMenuOpen(false);
      setTransitionState("leaving");
      window.setTimeout(() => {
        router.push(href);
      }, 180);
    },
    [router]
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const duration = transitionState === "intro" ? 1200 : 760;
    const timeout = window.setTimeout(() => {
      setTransitionState("idle");
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [pathname, transitionState]);

  return (
    <TransitionNavigationProvider value={startTransitionNavigation}>
      <div
        className={clsx(
          styles.transitionLayer,
          transitionState !== "idle" && styles.transitionVisible,
          transitionState === "intro" && styles.transitionIntro,
          transitionState === "leaving" && styles.transitionLeaving
        )}
        aria-hidden="true"
      >
        <div className={styles.transitionMark}>
          <span>PN</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.menuDock}
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={menuOpen ? "Close site navigation" : "Open site navigation"}
      >
        <div className={styles.dockIcon}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <span className={styles.dockLabel}>{menuOpen ? "Close" : "Menu"}</span>
      </button>

      <div
        className={clsx(styles.scrim, menuOpen && styles.scrimVisible)}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="site-navigation"
        className={clsx(styles.navOverlay, menuOpen && styles.navOverlayOpen)}
      >
        <div className={styles.navPrimary}>
          <p className={styles.overlayEyebrow}>Main Menu</p>
          <div className={styles.navCluster}>
            {primaryNav.map((item) => {
              const active = pathname === item.href;

              return (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  className={clsx(styles.primaryLink, active && styles.primaryLinkActive)}
                >
                  {item.label}
                </TransitionLink>
              );
            })}
          </div>
        </div>

        <div className={styles.navSecondary}>
          <div className={styles.secondaryGroup}>
            <p className={styles.overlayEyebrow}>Build With Us</p>
            <div className={styles.secondaryLinks}>
              <TransitionLink href="/why#pricing">Transparent pricing</TransitionLink>
              <TransitionLink href="/why#support">Partner enablement</TransitionLink>
              <TransitionLink href="/connect#sales">Merchant sales</TransitionLink>
              <TransitionLink href="/connect#support">Client support</TransitionLink>
            </div>
          </div>

          <div className={styles.secondaryGroup}>
            <p className={styles.overlayEyebrow}>Brand Line</p>
            <p className={styles.brandStatement}>
              PAYNEXPRO builds modern payment systems for operators who want clean
              service, sharp economics, and a team that actually shows up.
            </p>
          </div>

          <div className={styles.secondaryGroup}>
            <p className={styles.overlayEyebrow}>Stay Connected</p>
            <div className={styles.socialRow}>
              <span>LinkedIn</span>
              <span>Instagram</span>
              <span>YouTube</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="shell-main">{children}</main>
      <SiteFooter />
      <SupportWidget />
    </TransitionNavigationProvider>
  );
}
