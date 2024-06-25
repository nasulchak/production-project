import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'shared/const/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            age: 12,
            lastname: 'Korotov',
            city: 'Moscow',
            country: Country.Russia,
            currency: Currency.RUB,
            first: 'Alex',
            username: 'AlexKor',
            avatar,
        },
    },
    decorators: [
        storeDecorator({} as StateSchema),
    ],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        storeDecorator({} as StateSchema),
    ],
};

export const withError: Story = {
    args: {
        error: 'Error',
    },
    decorators: [
        storeDecorator({} as StateSchema),
    ],
};
