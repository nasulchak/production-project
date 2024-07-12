import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [
        storeDecorator({
            profile: {
                data: {
                    age: 12,
                    lastname: 'Korotov',
                    city: 'Moscow',
                    country: Country.Russia,
                    currency: Currency.RUB,
                    first: 'Alex',
                    username: 'AlexKor',
                },
            },
        } as StateSchema),
    ],
};

export const Dark: Story = {
    decorators: [
        storeDecorator({
            profile: {
                data: {
                    age: 12,
                    lastname: 'Korotov',
                    city: 'Moscow',
                    country: Country.Russia,
                    currency: Currency.RUB,
                    first: 'Alex',
                    username: 'AlexKor',
                },
            },
        } as StateSchema),
        styleDecorator(Theme.DARK),
    ],
};
