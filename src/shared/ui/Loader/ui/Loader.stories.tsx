import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};
