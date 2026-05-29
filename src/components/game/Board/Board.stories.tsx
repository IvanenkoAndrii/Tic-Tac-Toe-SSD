import type { Meta, StoryObj } from '@storybook/react';
import Board from './Board';
import { BoardState } from '../../../types/game.types';

const meta: Meta<typeof Board> = {
  title: 'Game/Board',
  component: Board,
  tags: ['autodocs'],
  argTypes: {
    board: {
      control: 'object',
      description: 'Матриця стану ігрового поля (BoardState)',
    },
    winningCells: {
      control: 'object',
      description: 'Координати переможних клітинок',
    },
    onCellClick: { action: 'cellClicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Board>;

const emptyBoard3x3: BoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const Empty3x3: Story = {
  args: {
    board: emptyBoard3x3,
    winningCells: [],
  },
};

const midGameBoard3x3: BoardState = [
  ['X', null, 'O'],
  [null, 'X', null],
  ['O', null, null],
];

export const MidGame: Story = {
  args: {
    board: midGameBoard3x3,
    winningCells: [],
  },
};

const wonBoard3x3: BoardState = [
  ['X', 'O', 'O'],
  [null, 'X', null],
  [null, null, 'X'],
];

export const WonDiagonalX: Story = {
  args: {
    board: wonBoard3x3,
    winningCells: [[0, 0], [1, 1], [2, 2]],
  },
};

const wonBoardVerticalO: BoardState = [
  ['X', 'O', null],
  ['X', 'O', null],
  [null, 'O', 'X'],
];

export const WonVerticalO: Story = {
  args: {
    board: wonBoardVerticalO,
    winningCells: [[0, 1], [1, 1], [2, 1]],
  },
};

const emptyBoard4x4: BoardState = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

export const Empty4x4: Story = {
  args: {
    board: emptyBoard4x4,
    winningCells: [],
  },
};

const clean5x5: BoardState = Array(5).fill(null).map(() => Array(5).fill(null));

export const Empty5x5: Story = {
  args: {
    board: clean5x5,
    winningCells: [],
  },
};
