import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileHeader } from './EditableProfileHeader';

const meta: Meta<typeof EditableProfileHeader> = {
    title: 'features/editableProfileCard/EditableProfileHeader',
    component: EditableProfileHeader,
};

export default meta;
type Story = StoryObj<typeof EditableProfileHeader>;

export const Primary: Story = {
    decorators: [
        storeDecorator({
        }),
    ],
};
