import React from 'react';
import styles from './CookieConsent.module.css';
import { CookieConsentType } from '../../../hooks/useCookieConsent';

interface CookieConsentProps {
  onConsent: (type: CookieConsentType) => void;
  onOpenPrivacyPolicy: () => void;
}

/**
 * Банер згоди на використання файлів Cookie (GDPR).
 *
 * З'являється при першому візиті користувача або якщо згода не збережена.
 * Дозволяє вибрати рівень приватності:
 * - Тільки необхідні (відхилити всі).
 * - Лише функціональні (збереження налаштувань).
 * - Дозволити всі (включаючи збереження історії ігор та статистики).
 *
 * @param {Object} props - Пропси компонента.
 * @param {Function} props.onConsent - Колбек, що викликається при виборі опції. Передає `CookieConsentType`.
 * @param {Function} props.onOpenPrivacyPolicy - Колбек для відкриття сторінки політики конфіденційності.
 * @returns {JSX.Element} Контейнер з банером згоди.
 *
 * @requires module:useCookieConsent
 * @requires module:CookieConsent.module.css
 */
const CookieConsent: React.FC<CookieConsentProps> = ({ onConsent, onOpenPrivacyPolicy }) => {
  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className={styles.banner}>
        <div className={styles.header}>
          <h2 className={styles.title} id="cookie-title">Ми використовуємо cookie</h2>
        </div>

        <p className={styles.description}>
          Цей застосунок може використовувати cookie та локальне сховище для покращення вашого
          досвіду. Оберіть, які дані ви дозволяєте зберігати. Ваш вибір відповідає вимогам{' '}
          <strong>GDPR (Регламент ЄС 2016/679)</strong>.
        </p>

        <div className={styles.options}>
          {/* Option 1 — Decline */}
          <div className={`${styles.optionCard} ${styles.optionDecline}`}>
            <div className={styles.optionHeader}>
              <h3 className={styles.optionTitle}>Відхилити всі</h3>
            </div>
            <p className={styles.optionDescription}>
              Зберігається лише мінімальна функціональність. <strong>Жодних додаткових cookie</strong> не
              записується. Налаштування, історія ігор та статистика не зберігаються між сесіями.
            </p>
            <button
              id="cookie-decline-btn"
              className={`${styles.optionBtn} ${styles.btnDecline}`}
              onClick={() => onConsent('declined')}
              aria-label="Відхилити всі cookie"
            >
              Відхилити всі
            </button>
          </div>

          {/* Option 2 — Functional */}
          <div className={`${styles.optionCard} ${styles.optionFunctional}`}>
            <div className={styles.optionHeader}>
              <h3 className={styles.optionTitle}>Лише функціональні</h3>
            </div>
            <p className={styles.optionDescription}>
              Зберігаються базові cookie для <strong>налаштувань гри</strong> (наприклад, обраний розмір поля).{' '}
              Історія ігор та детальна статистика не зберігаються.
            </p>
            <button
              id="cookie-functional-btn"
              className={`${styles.optionBtn} ${styles.btnFunctional}`}
              onClick={() => onConsent('functional')}
              aria-label="Прийняти лише функціональні cookie"
            >
              Лише функціональні
            </button>
          </div>

          {/* Option 3 — Accept All */}
          <div className={`${styles.optionCard} ${styles.optionAll}`}>
            <div className={styles.optionHeader}>
              <h3 className={styles.optionTitle}>Прийняти всі</h3>
            </div>
            <p className={styles.optionDescription}>
              Дозволяє зберігати всі дані, включно з <strong>історією ваших ігор</strong> та{' '}
              <strong>детальною статистикою перемог</strong> для відстеження вашого прогресу.
            </p>
            <button
              id="cookie-accept-all-btn"
              className={`${styles.optionBtn} ${styles.btnAll}`}
              onClick={() => onConsent('all')}
              aria-label="Прийняти всі cookie"
            >
              Прийняти всі
            </button>
          </div>
        </div>

        <p className={styles.policyLink}>
          Детальніше про використання даних:{' '}
          <button
            className={styles.linkBtn}
            onClick={onOpenPrivacyPolicy}
            id="cookie-privacy-link"
          >
            Політика конфіденційності
          </button>
        </p>
      </div>
    </div>
  );
};

export default CookieConsent;
