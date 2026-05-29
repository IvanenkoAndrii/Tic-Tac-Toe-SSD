import { useState, useEffect, useCallback } from 'react';
import { GameResult, GameStats } from '../types/game.types';
import { getCookie, setCookie, deleteCookie } from '../utils/cookies';

const STORAGE_KEY = 'tic-tac-toe-game-history';

export const calculateStats = (history: GameResult[]): GameStats => {
    const totalGames = history.length;
    const xWins = history.filter((game) => game.winner === 'X').length;
    const oWins = history.filter((game) => game.winner === 'O').length;
    const draws = history.filter((game) => game.isDraw).length;

    return {
        totalGames,
        xWins,
        oWins,
        draws,
        xWinPercentage: totalGames > 0 ? ((xWins / totalGames) * 100).toFixed(1) : '0',
        oWinPercentage: totalGames > 0 ? ((oWins / totalGames) * 100).toFixed(1) : '0',
    };
};

export const useGameStorage = () => {
    const [gameHistory, setGameHistory] = useState<GameResult[]>(() => {
        try {
            const savedHistory = getCookie(STORAGE_KEY);
            return savedHistory ? JSON.parse(savedHistory) as GameResult[] : [];
        } catch (error) {
            console.error('Помилка завантаження історії ігор:', error);
            deleteCookie(STORAGE_KEY);
            return [];
        }
    });

    const [gameStats, setGameStats] = useState<GameStats>(() => {
        try {
            const savedHistory = getCookie(STORAGE_KEY);
            const history = savedHistory ? JSON.parse(savedHistory) as GameResult[] : [];
            return calculateStats(history);
        } catch (error) {
            console.error('Помилка завантаження статистики:', error);
            deleteCookie(STORAGE_KEY);
            return {
                totalGames: 0,
                xWins: 0,
                oWins: 0,
                draws: 0,
                xWinPercentage: '0',
                oWinPercentage: '0',
            };
        }
    });



    const updateStats = useCallback((history: GameResult[]) => {
        setGameStats(calculateStats(history));
    }, []);

    useEffect(() => {
        updateStats(gameHistory);
    }, [gameHistory, updateStats]);

    const saveGameResult = useCallback((result: GameResult) => {
        try {
            const updatedHistory = [...gameHistory, result];
            setGameHistory(updatedHistory);

            const consent = getCookie('cookieConsent');
            if (consent === 'all') {
                setCookie(STORAGE_KEY, JSON.stringify(updatedHistory), 30);
            }

            updateStats(updatedHistory);
        } catch (error) {
            console.error('Помилка збереження результату гри:', error);
        }
    }, [gameHistory, updateStats]);

    const clearGameHistory = useCallback(() => {
        try {
            setGameHistory([]);
            deleteCookie(STORAGE_KEY);
            updateStats([]);
        } catch (error) {
            console.error('Помилка очищення історії:', error);
        }
    }, [updateStats]);

    const getStats = useCallback((): GameStats => {
        return gameStats;
    }, [gameStats]);

    return {
        gameHistory,
        gameStats,
        saveGameResult,
        clearGameHistory,
        getStats,
    };
};