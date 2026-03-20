"use client";

import { createContext, useContext } from "react";

const TransitionNavigationContext = createContext<(href: string) => void>(() => {});

export const TransitionNavigationProvider = TransitionNavigationContext.Provider;

export function useTransitionNavigation() {
  return useContext(TransitionNavigationContext);
}
