import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: '123',
        items: [
            {
                content: 'fdsfasgf',
                value: '123',
            },
            {
                content: 'fdsfddadsasgf',
                value: '123123',
            },
        ],
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: '123',
        items: [
            {
                content: 'fdsfasgf',
                value: '123',
            },
            {
                content: 'fdsfddadsasgf',
                value: '123123',
            },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '123',
        items: [
            {
                content: 'fdsfasgf',
                value: '123',
            },
            {
                content: 'fdsfddadsasgf',
                value: '123123',
            },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '123',
        items: [
            {
                content: 'fdsfasgf',
                value: '123',
            },
            {
                content: 'fdsfddadsasgf',
                value: '123123',
            },
        ],
    },
};
