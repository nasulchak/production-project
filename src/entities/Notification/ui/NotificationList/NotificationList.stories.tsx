import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                    {
                        id: '2',
                        title: 'Уведомление 2',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                    {
                        id: '3',
                        title: 'Уведомление 3',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                ],
            },
        ],
    },
    decorators: [
        storeDecorator({} as StateSchema),
    ],
};
