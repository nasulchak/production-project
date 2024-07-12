import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {

    },
    decorators: [
        storeDecorator({
            addCommentForm: {
                text: '',
            },
        } as StateSchema),
    ],
};
