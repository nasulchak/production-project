import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
import MainPage from './MainPage';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
    decorators: [
        storeDecorator({
            counter: {
                value: 10,
            },
        } as StateSchema),
    ],
};

export const Dark: Story = {
    decorators: [
        storeDecorator({
            counter: {
                value: 10,
            },
        } as StateSchema),
        styleDecorator(Theme.DARK),
    ],
};
