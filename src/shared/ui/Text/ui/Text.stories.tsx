import type { Meta, StoryObj } from '@storybook/react';
import { styleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

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
        text: 'Сам текст',
        title: 'Заголовок',
    },
};

export const Error: Story = {
    args: {
        text: 'Сам текст',
        title: 'Заголовок',
        theme: TextTheme.ERROR,
    },
};

export const PrimaryDark: Story = {
    args: {
        text: 'Сам текст',
        title: 'Заголовок',
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
        text: 'Содержимое',
    },
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Заголовок',
    },
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Заголовок',
    },
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};

export const SizeL: Story = {
    args: {
        text: 'Сам текст',
        title: 'Заголовок',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        text: 'Сам текст',
        title: 'Заголовок',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        text: 'Сам текст',
        title: 'Заголовок',
        size: TextSize.S,
    },
};
