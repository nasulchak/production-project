import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'feauters/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    decorators: [
        storeDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
            },
        } as StateSchema),
    ],
};

export const withError: Story = {
    decorators: [
        storeDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
                error: 'Неверный логин или пароль',
            },
        } as StateSchema),
    ],
};

export const Loading: Story = {
    decorators: [
        storeDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: true,
            },
        } as StateSchema),
    ],
};
