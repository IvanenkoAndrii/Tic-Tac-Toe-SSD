import { useState, useCallback, useEffect } from 'react';
import { getCookie, setCookie, deleteCookie } from '../utils/cookies';

export type CookieConsentType = 'declined' | 'functional' | 'all' | null;

const CONSENT_KEY = 'cookieConsent';
const CONSENT_DATE_KEY = 'cookieConsentDate';
const CONSENT_EVENT = 'cookieConsentChanged';

export interface UseCookieConsentReturn {
  consent: CookieConsentType;
  isDecided: boolean;
  setConsent: (type: CookieConsentType) => void;
  resetConsent: () => void;
  canUseFunctionalCookies: boolean;
  canUseAnalyticsCookies: boolean;
}

export const useCookieConsent = (): UseCookieConsentReturn => {
  const [consent, setConsentState] = useState<CookieConsentType>(() => {
    try {
      const stored = getCookie(CONSENT_KEY);
      return (stored as CookieConsentType) ?? null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const handleConsentChange = (e: Event) => {
      const customEvent = e as CustomEvent<CookieConsentType>;
      setConsentState(customEvent.detail);
    };

    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  }, []);

  const isDecided = consent !== null;
  const canUseFunctionalCookies = consent === 'functional' || consent === 'all';
  const canUseAnalyticsCookies = consent === 'all';

  const setConsent = useCallback((type: CookieConsentType) => {
    setConsentState(type);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: type }));
    
    if (type === null) {
      deleteCookie(CONSENT_KEY);
      deleteCookie(CONSENT_DATE_KEY);
      return;
    }

    setCookie(CONSENT_KEY, type, 365); // Save for 1 year
    setCookie(CONSENT_DATE_KEY, new Date().toISOString(), 365);

    if (type === 'declined') {
      deleteCookie('tic-tac-toe-settings');
      deleteCookie('tic-tac-toe-game-history');
      deleteCookie('tic-tac-toe-player-stats');
      deleteCookie('gameSettings');
      deleteCookie('gameStatistics');
      deleteCookie('playerName');
    }
  }, []);

  const resetConsent = useCallback(() => {
    setConsent(null);
  }, [setConsent]);

  return {
    consent,
    isDecided,
    setConsent,
    resetConsent,
    canUseFunctionalCookies,
    canUseAnalyticsCookies,
  };
};
