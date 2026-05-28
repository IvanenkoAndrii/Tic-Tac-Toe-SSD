import React from 'react';
import styles from './PrivacyPolicyPage.module.css';

interface PrivacyPolicyPageProps {
    onReturn: () => void;
    onResetCookies: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onReturn, onResetCookies }) => {
    return (
        <div className={styles.policyPage}>
            {/* Top bar */}
            <div className={styles.topBar}>
                <button
                    id="privacy-back-btn"
                    className={styles.backBtn}
                    onClick={onReturn}
                >
                    ← Повернутися
                </button>
                <button
                    id="privacy-reset-cookies-btn"
                    className={styles.cookieSettingsBtn}
                    onClick={onResetCookies}
                >
                    Змінити налаштування cookie
                </button>
            </div>

            {/* Content card */}
            <div className={styles.policyCard}>
                <h1 className={styles.policyTitle}>Політика конфіденційності</h1>
                <p className={styles.policyMeta}>
                    Версія 1.0 · Дата набрання чинності: 28 травня 2026 р. · Застосунок: Хрестики-Нулики
                </p>

                {/* Section 1 */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Загальні положення</h2>
                    <div className={styles.sectionContent}>
                        <p>
                            Цей документ регулює умови використання веб-застосунку «Хрестики-Нулики» та
                            описує, як ми збираємо, використовуємо та захищаємо ваші дані відповідно до
                            вимог <strong>Загального регламенту про захист даних (GDPR)</strong> — Регламент
                            ЄС 2016/679.
                        </p>
                        <p>
                            Використовуючи цей застосунок, ви погоджуєтесь із умовами цієї Політики
                            конфіденційності. Якщо ви не згодні — будь ласка, не використовуйте застосунок.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Які дані ми збираємо</h2>
                    <div className={styles.sectionContent}>
                        <p><strong>Дані, що ви надаєте:</strong></p>
                        <ul className={styles.list}>
                            <li>Ім'я гравця — необов'язково, для персоналізації</li>
                            <li>Налаштування гри — обрана тема, параметри ігрового поля</li>
                        </ul>

                        <p><strong>Автоматично зібрані дані:</strong></p>
                        <ul className={styles.list}>
                            <li>Технічні дані браузера — лише при використанні аналітичних cookie</li>
                            <li>Статистика ігрових сесій — зберігається локально</li>
                        </ul>

                        <p><strong>Cookie:</strong></p>
                        <table className={styles.cookieTable}>
                            <thead>
                                <tr>
                                    <th>Тип</th>
                                    <th>Назва</th>
                                    <th>Мета</th>
                                    <th>Термін</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Необхідні</strong></td>
                                    <td>cookieConsent</td>
                                    <td>Зберігає ваш вибір щодо cookie</td>
                                    <td>1 рік</td>
                                </tr>
                                <tr>
                                    <td><strong>Функціональні</strong></td>
                                    <td>gameSettings</td>
                                    <td>Налаштування гри (ім'я, тема)</td>
                                    <td>30 днів</td>
                                </tr>
                                <tr>
                                    <td><strong>Функціональні</strong></td>
                                    <td>gameStatistics</td>
                                    <td>Статистика ігор</td>
                                    <td>30 днів</td>
                                </tr>
                                <tr>
                                    <td><strong>Аналітичні</strong></td>
                                    <td><em>лише за згодою</em></td>
                                    <td>Покращення гри</td>
                                    <td>Сесія</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Section 3 */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Правова основа (GDPR)</h2>
                    <div className={styles.sectionContent}>
                        <ul className={styles.list}>
                            <li>
                                <strong>Законний інтерес:</strong> Технічне функціонування
                                застосунку
                            </li>
                            <li>
                                <strong>Згода:</strong> Функціональні та аналітичні cookie —
                                лише з вашого явного дозволу
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 4 */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Зберігання даних</h2>
                    <div className={styles.sectionContent}>
                        <ul className={styles.list}>
                            <li>Усі дані зберігаються <strong>локально у вашому браузері</strong></li>
                            <li>Ми <strong>не передаємо</strong> ваші дані третім особам</li>
                            <li>Ми <strong>не зберігаємо</strong> ваші дані на серверах</li>
                            <li>Дані видаляються при очищенні кеш-пам'яті браузера</li>
                        </ul>
                    </div>
                </div>

                {/* Section 5 */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Мінімальна функціональність без cookie</h2>
                    <div className={styles.sectionContent}>
                        <p>При виборі <strong>«Відхилити всі cookie»</strong>:</p>

                        <div className={styles.availableBox}>
                            <ul className={styles.list}>
                                <li>Повноцінна гра Хрестики-Нулики</li>
                                <li>Всі режими гри</li>
                                <li>Перегляд результатів поточної сесії</li>
                            </ul>
                        </div>

                        <div className={styles.unavailableBox}>
                            <ul className={styles.list}>
                                <li>Збереження імені між сесіями</li>
                                <li>Збереження налаштувань теми</li>
                                <li>Накопичувальна статистика ігор</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 6 — GDPR compliance */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>6. Відповідність GDPR</h2>
                    <div className={styles.sectionContent}>
                        <ul className={styles.list}>
                            <li><strong>Мінімізація даних</strong> — збирається лише необхідна кількість</li>
                            <li><strong>Прозорість</strong> — ви завжди знаєте, які дані збираються</li>
                            <li><strong>Контроль</strong> — ви можете відмовитись від будь-яких cookie</li>
                            <li><strong>Збереження</strong> — дані зберігаються лише стільки, скільки необхідно</li>
                            <li><strong>Безпека</strong> — дані не передаються третім особам</li>
                        </ul>
                    </div>
                </div>

                <p className={styles.footerNote}>
                    Цей документ складено відповідно до Регламенту ЄС 2016/679 (GDPR).
                    <br />
                    © 2026 — Навчальний проєкт «Хрестики-Нулики». Усі права захищено.
                </p>
            </div>
        </div>
    );
};

export { PrivacyPolicyPage };
