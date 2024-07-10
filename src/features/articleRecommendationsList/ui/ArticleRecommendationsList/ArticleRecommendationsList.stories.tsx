import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

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
    decorators: [
        storeDecorator({
        }),
    ],
};
