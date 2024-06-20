import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { styleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Текст',
    },
};

export const Clear: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [
        styleDecorator(Theme.DARK),
    ],
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundThemeInverted: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Squere: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        squere: true,
    },
};

export const SquereSizeL: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        squere: true,
        size: ButtonSize.L,
    },
};

export const SquereSizeXL: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        squere: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        disabled: true,
    },
};
