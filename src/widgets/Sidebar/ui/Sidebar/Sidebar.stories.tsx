import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const LightTheme: Story = {
    decorators: [
        storeDecorator({
            user: {
                authData: {
                    username: 'admin',
                    id: '1',
                },
            },
        } as StateSchema),
    ],
};

export const DarkTheme: Story = {
    decorators: [
        styleDecorator(Theme.DARK),
        storeDecorator({
            user: {
                authData: {
                    username: 'admin',
                    id: '1',
                },
            },
        } as StateSchema),
    ],
};

export const LightThemeNoAuth: Story = {
    decorators: [
        storeDecorator({
            user: {},
        } as StateSchema),
    ],
};

export const DarkThemeNoAuth: Story = {
    decorators: [
        styleDecorator(Theme.DARK),
        storeDecorator({
            user: {},
        } as StateSchema),
    ],
};
