"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

import { useTransitionNavigation } from "@/components/layout/transition-navigation";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function TransitionLink({
  href,
  children,
  className,
  target,
  rel,
  onClick
}: TransitionLinkProps) {
  const pathname = usePathname();
  const navigateWithTransition = useTransitionNavigation();
  const [baseHref, hash] = href.split("#");
  const normalizedBase = baseHref || pathname;
  const isInternalRoute = href.startsWith("/");
  const isSamePageAnchor = Boolean(hash) && normalizedBase === pathname;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0 ||
      !isInternalRoute ||
      target === "_blank" ||
      isSamePageAnchor
    ) {
      return;
    }

    event.preventDefault();
    navigateWithTransition(href);
  }

  return (
    <Link href={href} className={className} target={target} rel={rel} onClick={handleClick}>
      {children}
    </Link>
  );
}
