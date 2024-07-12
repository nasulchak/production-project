import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Card } from './Card';
import { Text } from '../Text';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        children: <Text title="Text" text="text" />,
    },
};
