import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Common/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      table: { disable: true },
    },
    title: {
      control: 'text',
      description: 'Заголовок модального вікна',
    },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Декоратор для зручного управління станом в Storybook Docs
const ModalWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Відкрити модальне вікно
      </Button>
      <Modal {...args} isOpen={isOpen} onClose={() => {
        setIsOpen(false);
        args.onClose?.();
      }} />
    </div>
  );
};

export const Default: Story = {
  render: ModalWrapper,
  args: {
    title: 'Повідомлення',
    children: (
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
        Це просте модальне вікно з текстом. Ви можете додати сюди будь-який контент.
      </p>
    ),
  },
};

export const WithFooter: Story = {
  render: ModalWrapper,
  args: {
    title: 'Підтвердження дії',
    children: (
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
        Ви впевнені, що хочете видалити ці дані? Цю дію неможливо буде скасувати.
      </p>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', width: '100%' }}>
        <Button variant="secondary" onClick={() => {}}>Скасувати</Button>
        <Button variant="danger" onClick={() => {}}>Видалити</Button>
      </div>
    ),
  },
};

export const LongContent: Story = {
  render: ModalWrapper,
  args: {
    title: 'Умови використання',
    children: (
      <div style={{ color: 'var(--text-secondary)' }}>
        <p>1. Загальні положення...</p>
        <p>2. Права користувача...</p>
        <p>3. Обов'язки...</p>
        <p>4. Політика конфіденційності...</p>
        <p>5. Використання файлів cookie...</p>
        <p>6. Зміни до умов...</p>
        <p>7. Контактна інформація...</p>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', width: '100%' }}>
        <Button variant="primary" onClick={() => {}}>Прийняти</Button>
      </div>
    ),
  },
};
