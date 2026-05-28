import React from 'react';
import { Button } from '../../components';
import { useCookieConsent } from '../../hooks';
import styles from './StartPage.module.css';

interface StartPageProps {
    onStartGame: () => void;
    onOpenSettings: () => void;
    onOpenHistory: () => void;
}

const StartPage: React.FC<StartPageProps> = ({
                                                 onStartGame,
                                                 onOpenSettings,
                                                 onOpenHistory
                                             }) => {
    const { consent } = useCookieConsent();
    const isSettingsDisabled = consent === 'declined';
    const isHistoryDisabled = consent !== 'all';

    return (
        <div className={styles.startPage}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Хрестики-Нулики</h1>
                <p className={styles.subtitle}>Класична гра на полі 3×3</p>
            </div>

            <div className={styles.content}>
                <div className={styles.description}>
                    <h2>Правила гри:</h2>
                    <ul className={styles.rulesList}>
                        <li>Два гравці по черзі ставлять свої символи — «X» та «O»</li>
                        <li>Гра ведеться на полі 3×3 клітинки</li>
                        <li>Мета — скласти ряд з трьох своїх символів по горизонталі, вертикалі або діагоналі</li>
                        <li>Якщо поле заповнене і переможця немає — гра завершується нічиєю</li>
                    </ul>
                </div>

                <div className={styles.controls}>
                    <Button
                        variant="primary"
                        size="large"
                        onClick={onStartGame}
                    >
                        Почати гру
                    </Button>

                    <div className={styles.secondaryControls}>
                        <Button
                            variant="secondary"
                            onClick={onOpenSettings}
                            disabled={isSettingsDisabled}
                            title={isSettingsDisabled ? "Налаштування недоступні при відхилених cookie" : undefined}
                        >
                            Налаштування
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={onOpenHistory}
                            disabled={isHistoryDisabled}
                            title={isHistoryDisabled ? "Статистика та історія зберігаються лише при повному прийнятті cookie" : undefined}
                        >
                            Статистика ігор
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;