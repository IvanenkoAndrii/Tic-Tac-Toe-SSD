import React from 'react';
import { useForm } from 'react-hook-form';
import { GameSettings } from '../../../types/game.types';
import { Button } from '../Button';
import styles from './SettingsForm.module.css';

interface SettingsFormProps {
    initialSettings: GameSettings;
    onSubmit: (settings: GameSettings) => void;
    onCancel: () => void;
    onResetToDefault: () => void;
}

/**
 * Форма налаштувань параметрів гри з валідацією через React Hook Form.
 *
 * Дозволяє змінити розмір ігрового поля. Валідує введені дані та 
 * попереджає користувача, що зміни вплинуть лише на наступну гру.
 * Надає кнопки для збереження, скасування або скидання до стандартних налаштувань.
 *
 * @param {Object} props - Пропси компонента.
 * @param {GameSettings} props.initialSettings - Початкові значення полів форми.
 * @param {Function} props.onSubmit - Функція, що викликається при успішній відправці форми.
 * @param {Function} props.onCancel - Функція скасування та закриття форми без збереження.
 * @param {Function} props.onResetToDefault - Функція скидання налаштувань до стандартних.
 * @returns {JSX.Element} Елемент форми `<form>`.
 *
 * @requires module:react-hook-form
 * @requires module:SettingsForm.module.css
 */
const SettingsForm: React.FC<SettingsFormProps> = ({
                                                       initialSettings,
                                                       onSubmit,
                                                       onCancel,
                                                       onResetToDefault
                                                   }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<GameSettings>({
        defaultValues: initialSettings,
    });

    const handleFormSubmit = (data: GameSettings) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.settingsForm}>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Розмір поля</label>
                <select
                    className={styles.selectControl}
                    {...register('boardSize', {
                        required: 'Оберіть розмір поля',
                        valueAsNumber: true
                    })}
                >
                    <option value={3}>3×3 (Класичний)</option>
                    <option value={4}>4×4 (Середній)</option>
                    <option value={5}>5×5 (Важкий)</option>
                </select>
                {errors.boardSize && (
                    <span className={styles.errorMessage}>{errors.boardSize.message}</span>
                )}
                <p className={styles.settingDescription}>
                    Зміна розміру поля вплине на наступну гру.
                </p>
            </div>

            <div className={styles.formActions}>
                <Button
                    type="submit"
                    variant="primary"
                    onClick={() => {}}
                >
                    Зберегти
                </Button>
                <Button
                    type="button"
                    variant="secondary"
                    onClick={onCancel}
                >
                    Скасувати
                </Button>
                <Button
                    type="button"
                    variant="danger"
                    onClick={onResetToDefault}
                >
                    Скинути до стандартних
                </Button>
            </div>
        </form>
    );
};

export default SettingsForm;