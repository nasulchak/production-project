import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 213,
    user: {
        id: '1',
        username: '123',
    },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'dasdd',
};

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {
        layout: 'centered',
    },

};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        ...article, id: '1',
                    },
                    {
                        ...article, id: '2',
                    },
                    {
                        ...article, id: '3',
                    },
                ],
            },
        ],
    },
    decorators: [
        storeDecorator({
        }),
    ],
};
