import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GameEndModal from './GameEndModal';
import Button from '../Button/Button';

const meta: Meta<typeof GameEndModal> = {
  title: 'Common/GameEndModal',
  component: GameEndModal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      table: { disable: true },
    },
    winner: {
      control: 'radio',
      options: ['X', 'O'],
      description: 'Переможець',
    },
    isDraw: {
      control: 'boolean',
      description: 'Чи гра завершилась внічию',
    },
    moveCount: {
      control: 'number',
      description: 'Кількість ходів у грі',
    },
    onClose: { action: 'closed' },
    onRestart: { action: 'restarted' },
    onNewGame: { action: 'newGameStarted' },
    onReturnToMenu: { action: 'returnedToMenu' },
  },
};

export default meta;
type Story = StoryObj<typeof GameEndModal>;

const ModalWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Показати результат гри
      </Button>
      <GameEndModal {...args} isOpen={isOpen} onClose={() => {
        setIsOpen(false);
        args.onClose?.();
      }} />
    </div>
  );
};

export const PlayerXWon: Story = {
  render: ModalWrapper,
  args: {
    winner: 'X',
    isDraw: false,
    moveCount: 7,
  },
};

export const PlayerOWon: Story = {
  render: ModalWrapper,
  args: {
    winner: 'O',
    isDraw: false,
    moveCount: 12,
  },
};

export const GameDraw: Story = {
  render: ModalWrapper,
  args: {
    winner: null,
    isDraw: true,
    moveCount: 25,
  },
};
