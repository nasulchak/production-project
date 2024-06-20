import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        text: 'Заголовок',
        title: 'Содержимое',
    },
};

export const Error: Story = {
    args: {
        text: 'Заголовок',
        title: 'Содержимое',
        theme: TextTheme.ERROR,
    },
};

export const PrimaryDark: Story = {
    args: {
        text: 'Заголовок',
        title: 'Содержимое',
    },
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};

export const OnlyText: Story = {
    args: {
        text: 'Заголовок',
    },
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Заголовок',
    },
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Содержимое',
    },
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Содержимое',
    },
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};
