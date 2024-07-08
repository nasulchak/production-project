import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'centered',
    },
    // tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const topLeft: Story = {
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

export const topRight: Story = {
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

export const bottomRight: Story = {
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

export const bottomLeft: Story = {
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
