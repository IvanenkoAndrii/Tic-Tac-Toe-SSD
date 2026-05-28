import { useState, useEffect } from 'react';
import { GameSettings } from '../types/game.types';
import { getCookie, setCookie, deleteCookie } from '../utils/cookies';

const SETTINGS_STORAGE_KEY = 'tic-tac-toe-settings';

const DEFAULT_SETTINGS: GameSettings = {
    boardSize: 3,
};

export const useGameSettings = () => {
    const [settings, setSettings] = useState<GameSettings>(DEFAULT_SETTINGS);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const savedSettings = getCookie(SETTINGS_STORAGE_KEY);
        if (savedSettings) {
            try {
                const parsedSettings = JSON.parse(savedSettings);
                setSettings({
                    boardSize: parsedSettings.boardSize || DEFAULT_SETTINGS.boardSize,
                });
            } catch {
                console.error('Помилка завантаження налаштувань');
                deleteCookie(SETTINGS_STORAGE_KEY);
            }
        }
        setIsInitialized(true);
    }, []);

    const saveSettings = (newSettings: GameSettings) => {
        setSettings(newSettings);
        const consent = getCookie('cookieConsent');
        if (consent !== 'declined') {
            setCookie(SETTINGS_STORAGE_KEY, JSON.stringify(newSettings), 30);
        }
    };

    const resetSettings = () => {
        setSettings(DEFAULT_SETTINGS);
        const consent = getCookie('cookieConsent');
        if (consent !== 'declined') {
            setCookie(SETTINGS_STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS), 30);
        } else {
            deleteCookie(SETTINGS_STORAGE_KEY);
        }
    };

    return {
        settings,
        saveSettings,
        resetSettings,
        isInitialized,
    };
};