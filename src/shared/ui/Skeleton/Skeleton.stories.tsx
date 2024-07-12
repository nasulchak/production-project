import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: {
        width: 600,
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const Dark: Story = {
    args: {
        width: 600,
        height: 200,
    },
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};
