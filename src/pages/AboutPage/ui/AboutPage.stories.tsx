import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};
