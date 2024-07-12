import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const UserAuthLight: Story = {
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

export const UserAuthDark: Story = {
    decorators: [
        storeDecorator({
            user: {
                authData: {
                    username: 'admin',
                    id: '1',
                },
            },
        } as StateSchema),
        styleDecorator(Theme.DARK),
    ],
};

export const NoUserAuthLight: Story = {
    decorators: [
        storeDecorator({ } as StateSchema),
    ],
};

export const NoUserAuthDark: Story = {
    decorators: [
        storeDecorator({} as StateSchema),
        styleDecorator(Theme.DARK),
    ],
};
