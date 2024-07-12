import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};
