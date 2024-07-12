import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};
