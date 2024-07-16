import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Rate: Story = {
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
    args: {
        articleId: '1',
    },
    decorators: [
        storeDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        } as StateSchema),
    ],
};

export const WithoutRate: Story = {
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'POST',
                status: 200,
                response: [

                ],
            },
        ],
    },
    args: {
        articleId: '1',
    },
    decorators: [
        storeDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        } as StateSchema),
    ],
};
