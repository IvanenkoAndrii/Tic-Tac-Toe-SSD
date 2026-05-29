import React from 'react';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { Player } from '../../../types/game.types';
import styles from './GameEndModal.module.css';

interface GameEndModalProps {
    isOpen: boolean;
    onClose: () => void;
    winner: Player | null;
    isDraw: boolean;
    moveCount: number;
    onRestart: () => void;
    onNewGame: () => void;
    onReturnToMenu: () => void;
}

/**
 * Модальне вікно завершення гри.
 *
 * Відображає результати гри: переможця або нічию, а також статистику
 * (кількість ходів, витрачений час). Надає кнопки для перезапуску гри,
 * початку нової з іншими налаштуваннями або повернення в головне меню.
 *
 * @param {Object} props - Пропси компонента.
 * @param {boolean} props.isOpen - Чи відображати діалог.
 * @param {Function} props.onClose - Колбек для закриття діалогу.
 * @param {Player | null} props.winner - Переможець гри (`'X'`, `'O'`) або `null`.
 * @param {boolean} props.isDraw - Прапорець, що гра закінчилась внічию.
 * @param {number} props.moveCount - Загальна кількість зроблених ходів у грі.
 * @param {Function} props.onRestart - Функція для перезапуску гри з тими ж налаштуваннями.
 * @param {Function} props.onNewGame - Функція для початку нової гри.
 * @param {Function} props.onReturnToMenu - Функція повернення в головне меню.
 * @returns {JSX.Element} Модальне вікно на основі компонента {@link Modal}.
 *
 * @requires module:Modal
 * @requires module:GameEndModal.module.css
 */
const GameEndModal: React.FC<GameEndModalProps> = ({
                                                       isOpen,
                                                       onClose,
                                                       winner,
                                                       isDraw,
                                                       moveCount,
                                                       onRestart,
                                                       onNewGame,
                                                       onReturnToMenu,
                                                   }) => {
    const getResultIcon = () => {
        if (isDraw) return 'Нічия';
        if (winner === 'X') return 'X';
        if (winner === 'O') return 'O';
        return '✓';
    };

    const getResultTitle = () => {
        if (isDraw) return 'Нічия!';
        return `Переміг гравець ${winner}!`;
    };

    const getResultDescription = () => {
        if (isDraw) return 'Поле заповнено, але переможця немає. Спробуйте ще раз!';
        return `Гра завершена за ${moveCount} ходів. Вітаємо переможця!`;
    };

    const footer = (
        <div className={styles.actions}>
            <Button variant="primary" onClick={onRestart}>
                Грати знову з цими налаштуваннями
            </Button>
            <Button variant="secondary" onClick={onNewGame}>
                Нова гра з новими налаштуваннями
            </Button>
            <Button variant="danger" onClick={onReturnToMenu}>
                Головне меню
            </Button>
        </div>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Гра завершена"
            footer={footer}
        >
            <div className={styles.gameEndModal}>
                <div className={styles.resultIcon}>{getResultIcon()}</div>
                <h2 className={styles.resultTitle}>{getResultTitle()}</h2>
                <p className={styles.resultDescription}>{getResultDescription()}</p>

                <div className={styles.gameStats}>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>Кількість ходів:</span>
                        <span className={styles.statValue}>{moveCount}</span>
                    </div>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>Результат:</span>
                        <span className={styles.statValue}>
              {isDraw ? 'Нічия' : `Перемога ${winner}`}
            </span>
                    </div>
                    <div className={styles.statRow}>
                        <span className={styles.statLabel}>Тривалість:</span>
                        <span className={styles.statValue}>
              {Math.ceil(moveCount / 2)} хвилин
            </span>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default GameEndModal;