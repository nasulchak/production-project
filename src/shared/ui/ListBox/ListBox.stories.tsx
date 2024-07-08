import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    // parameters: {
    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {

};
