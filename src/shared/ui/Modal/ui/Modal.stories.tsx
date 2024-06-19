import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { styleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Modal>;

export const PrimaryDark: Story = {
    args: {
        isOpen: true,
        children: 'Текст',
    },
};
