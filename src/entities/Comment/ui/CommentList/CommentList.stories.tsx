import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'Comments text 1 2 3',
                user: {
                    id: '1',
                    username: 'Alex',
                    avatar: 'https://img.freepik.com/premium-photo/cat-military-uniform_771335-50719.jpg',
                },
            },
            {
                id: '2',
                text: 'Comments 2 text 1 2 3',
                user: {
                    id: '1',
                    username: 'Alex',
                    avatar: 'https://img.freepik.com/premium-photo/cat-military-uniform_771335-50719.jpg',
                },
            },
        ],
    },
    decorators: [storeDecorator({} as StateSchema)],
};

export const Loading: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'Comments text 1 2 3',
                user: {
                    id: '1',
                    username: 'Alex',
                    avatar: 'https://img.freepik.com/premium-photo/cat-military-uniform_771335-50719.jpg',
                },
            },
            {
                id: '2',
                text: 'Comments 2 text 1 2 3',
                user: {
                    id: '1',
                    username: 'Alex',
                    avatar: 'https://img.freepik.com/premium-photo/cat-military-uniform_771335-50719.jpg',
                },
            },
        ],
        isLoading: true,
    },
    decorators: [storeDecorator({} as StateSchema)],
};
