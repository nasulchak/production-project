import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Comments text 1 2 3',
            user: {
                id: '1',
                username: 'Alex',
                avatar: 'https://img.freepik.com/premium-photo/cat-military-uniform_771335-50719.jpg',
            },
        },
    },
    decorators: [
        storeDecorator({

        } as StateSchema),
    ],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        storeDecorator({

        } as StateSchema),
    ],
};
