import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
      description: 'Стиль оформлення кнопки',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Розмір кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Чи кнопка вимкнена',
    },
    onClick: { action: 'clicked' },
    children: {
      control: 'text',
      description: 'Вміст кнопки',
    },
    type: { table: { disable: true } },
    title: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Головна кнопка',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    disabled: false,
    children: 'Друрядна кнопка',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'medium',
    disabled: false,
    children: 'Кнопка успіху',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'medium',
    disabled: false,
    children: 'Кнопка небезпеки',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
    children: 'Вимкнена кнопка',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Маленька кнопка',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Велика кнопка',
  },
};
