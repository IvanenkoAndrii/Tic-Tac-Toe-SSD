import type { Meta, StoryObj } from '@storybook/react';
import GameInfo from './GameInfo';

const meta: Meta<typeof GameInfo> = {
  title: 'Game/GameInfo',
  component: GameInfo,
  tags: ['autodocs'],
  argTypes: {
    currentPlayer: {
      control: 'radio',
      options: ['X', 'O'],
      description: 'Поточний гравець, чий хід',
    },
    winner: {
      control: 'radio',
      options: ['X', 'O'],
      description: 'Переможець (якщо гра закінчилася перемогою)',
    },
    isDraw: {
      control: 'boolean',
      description: 'Чи гра закінчилася внічию',
    },
    moveCount: {
      control: 'number',
      description: 'Кількість зроблених ходів',
    },
    playerStats: {
      control: 'object',
      description: 'Статистика гравців',
    },
    isSettingsDisabled: {
      control: 'boolean',
      description: 'Чи кнопка налаштувань заблокована',
    },
    onRestart: { action: 'restarted' },
    onResetStats: { action: 'statsReset' },
    onSettingsOpen: { action: 'settingsOpened' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GameInfo>;

const mockStats = {
  X: { wins: 5, losses: 2, draws: 1, totalMoves: 120 },
  O: { wins: 2, losses: 5, draws: 1, totalMoves: 110 },
};

export const InProgressX: Story = {
  args: {
    currentPlayer: 'X',
    winner: null,
    isDraw: false,
    moveCount: 5,
    playerStats: mockStats,
    isSettingsDisabled: false,
  },
};

export const InProgressO: Story = {
  args: {
    currentPlayer: 'O',
    winner: null,
    isDraw: false,
    moveCount: 6,
    playerStats: mockStats,
    isSettingsDisabled: false,
  },
};

export const PlayerXWon: Story = {
  args: {
    currentPlayer: 'X',
    winner: 'X',
    isDraw: false,
    moveCount: 7,
    playerStats: mockStats,
    isSettingsDisabled: false,
  },
};

export const PlayerOWon: Story = {
  args: {
    currentPlayer: 'O',
    winner: 'O',
    isDraw: false,
    moveCount: 8,
    playerStats: mockStats,
    isSettingsDisabled: false,
  },
};

export const Draw: Story = {
  args: {
    currentPlayer: 'X',
    winner: null,
    isDraw: true,
    moveCount: 9,
    playerStats: mockStats,
    isSettingsDisabled: false,
  },
};
