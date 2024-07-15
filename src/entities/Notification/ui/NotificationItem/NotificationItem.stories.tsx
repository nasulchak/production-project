import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {
        item: {
            title: 'Заголовок',
            description: 'Какой то текст',
            id: '1',
        },
    },
};
