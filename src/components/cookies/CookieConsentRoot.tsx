"use client";

import {
  CookieConsentProvider,
  useCookieConsent,
} from "./CookieConsentContext";
import { CookieBanner } from "./CookieBanner";
import { CookiePreferencesPanel } from "./CookiePreferencesPanel";
import { ConsentDefaults } from "./ConsentDefaults";

/** Reopen preferences after initial consent (footer Cookie Settings) */
function PreferencesOverlay() {
  const { status, showPreferences, closePreferences, isReady } =
    useCookieConsent();
  if (!isReady || !showPreferences || status === "pending") return null;
  return <CookiePreferencesPanel onClose={closePreferences} />;
}

export function CookieConsentRoot({ children }: { children: React.ReactNode }) {
  return (
    <CookieConsentProvider>
      <ConsentDefaults />
      {children}
      <CookieBanner />
      <PreferencesOverlay />
    </CookieConsentProvider>
  );
}
