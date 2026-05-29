import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
    onOpenPrivacyPolicy?: () => void;
}

/**
 * Основний макет (Layout) сторінки.
 *
 * Обгортає весь контент додатка. Містить статичну шапку (Header), 
 * основний контейнер для динамічного контенту (`children`), та підвал (Footer).
 * Керує відображенням загальної інформації та посиланням на політику конфіденційності.
 *
 * @param {Object} props - Пропси компонента.
 * @param {React.ReactNode} props.children - Вкладений контент (основна частина сторінки).
 * @param {Function} [props.onOpenPrivacyPolicy] - Опціональний колбек для відкриття політики конфіденційності у футері.
 * @returns {JSX.Element} Контейнер з базовою структурою сторінки.
 *
 * @requires module:Header
 * @requires module:Layout.module.css
 */
const Layout: React.FC<LayoutProps> = ({ children, onOpenPrivacyPolicy }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className="container">
                    <p className={styles.footerText}>
                        Каркас гри "Хрестики-Нулики" - 3-й курс
                    </p>
                    <p className={styles.footerSubtext}>
                        React + TypeScript + CSS Modules
                    </p>
                    {onOpenPrivacyPolicy && (
                        <button
                            id="footer-privacy-link"
                            className={styles.privacyLink}
                            onClick={onOpenPrivacyPolicy}
                        >
                            Політика конфіденційності
                        </button>
                    )}
                </div>
            </footer>
        </div>
    );
};

export default Layout;