import type { Meta, StoryObj } from '@storybook/react';
import ArticlePage from './ArticlePage';

const meta: Meta<typeof ArticlePage> = {
    title: 'pages/ArticlePage',
    component: ArticlePage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Primary: Story = {

};
