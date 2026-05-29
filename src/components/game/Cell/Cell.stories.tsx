import type { Meta, StoryObj } from '@storybook/react';
import Cell from './Cell';

const meta: Meta<typeof Cell> = {
  title: 'Game/Cell',
  component: Cell,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: ['X', 'O', null],
      description: 'Значення в клітинці',
    },
    row: {
      control: 'number',
      description: 'Індекс рядка',
    },
    col: {
      control: 'number',
      description: 'Індекс стовпця',
    },
    isWinningCell: {
      control: 'boolean',
      description: 'Чи є ця клітинка частиною переможної комбінації',
    },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100px', height: '100px', padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Empty: Story = {
  args: {
    value: null,
    row: 0,
    col: 0,
    isWinningCell: false,
  },
};

export const PlayerX: Story = {
  args: {
    value: 'X',
    row: 0,
    col: 0,
    isWinningCell: false,
  },
};

export const PlayerO: Story = {
  args: {
    value: 'O',
    row: 0,
    col: 0,
    isWinningCell: false,
  },
};

export const WinningX: Story = {
  args: {
    value: 'X',
    row: 0,
    col: 0,
    isWinningCell: true,
  },
};

export const WinningO: Story = {
  args: {
    value: 'O',
    row: 0,
    col: 0,
    isWinningCell: true,
  },
};
