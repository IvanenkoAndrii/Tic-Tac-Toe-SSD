import React from 'react';
import { Player } from '../../../types/game.types';
import { getMovesText } from '../../../utils/textUtils';
import styles from './GameInfo.module.css';

interface GameInfoProps {
    currentPlayer: Player;
    winner: Player | null;
    isDraw: boolean;
    moveCount: number;
    playerStats: {
        X: { wins: number; losses: number; draws: number; totalMoves: number };
        O: { wins: number; losses: number; draws: number; totalMoves: number };
    };
    onRestart: () => void;
    onResetStats?: () => void;
    onSettingsOpen?: () => void;
    isSettingsDisabled?: boolean;
}

/**
 * Інформаційна панель поточного стану гри.
 *
 * Відображає, чий зараз хід, або повідомлення про перемогу чи нічию.
 * Також показує номер поточного ходу та кнопки управління грою (Нова гра,
 * Скинути статистику, Налаштування).
 * Стан кнопки налаштувань залежить від згоди користувача на використання cookie.
 *
 * @param {Object} props - Пропси компонента.
 * @param {Player} props.currentPlayer - Гравець, чий зараз хід.
 * @param {Player | null} props.winner - Переможець (або `null`).
 * @param {boolean} props.isDraw - Чи завершилась гра нічиєю.
 * @param {number} props.moveCount - Кількість зроблених ходів.
 * @param {Object} props.playerStats - Статистика обох гравців.
 * @param {Function} props.onRestart - Колбек для перезапуску гри.
 * @param {Function} [props.onResetStats] - Опціональний колбек скидання статистики.
 * @param {Function} [props.onSettingsOpen] - Опціональний колбек відкриття налаштувань.
 * @param {boolean} [props.isSettingsDisabled] - Чи заблокована кнопка налаштувань.
 * @returns {JSX.Element} Панель з інформацією та кнопками.
 *
 * @requires module:GameInfo.module.css
 */
const GameInfo: React.FC<GameInfoProps> = ({
                                               currentPlayer,
                                               winner,
                                               isDraw,
                                               moveCount,
                                               playerStats,
                                               onRestart,
                                               onResetStats,
                                               onSettingsOpen,
                                               isSettingsDisabled,
                                           }) => {
    const getStatusMessage = () => {
        if (winner) {
            return (
                <>
                    <span className={styles.winnerSymbol}>{winner}</span>
                    <span>Переміг!</span>
                </>
            );
        }
        if (isDraw) {
            return (
                <>
                    <span>Нічия!</span>
                </>
            );
        }
        return (
            <>
                <span>Хід гравця:</span>
                <span className={`${styles.playerSymbol} ${styles[currentPlayer]}`}>
          {currentPlayer}
        </span>
            </>
        );
    };

    const getStatusClass = () => {
        if (winner) return styles.winner;
        if (isDraw) return styles.draw;
        return styles.current;
    };

    return (
        <div className={styles.gameInfo}>
            <div className={styles.status}>
                <div className={`${styles.statusMessage} ${getStatusClass()}`}>
                    {getStatusMessage()}
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statLabel}>Хід №:</span>
                        <span className={styles.statValue}>{getMovesText(moveCount)}</span>
                    </div>
                </div>
            </div>

            <div className={styles.controls}>
                <button
                    className={styles.controlButton}
                    onClick={onRestart}
                    aria-label="Почати нову гру"
                >
                    <span>Нова гра</span>
                </button>

                {onResetStats && (
                    <button
                        className={`${styles.controlButton} ${styles.secondary}`}
                        onClick={onResetStats}
                        aria-label="Скинути статистику"
                    >
                        <span>Скинути статистику</span>
                    </button>
                )}

                <button
                    className={`${styles.controlButton} ${styles.secondary}`}
                    onClick={onSettingsOpen}
                    disabled={isSettingsDisabled}
                    title={isSettingsDisabled ? "Налаштування недоступні при відхилених cookie" : undefined}
                    aria-label="Відкрити налаштування"
                >
                    <span>Налаштування</span>
                </button>
            </div>
        </div>
    );
};

export default GameInfo;
