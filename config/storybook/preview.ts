import type { Preview } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { routerDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { storeDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    decorators: [
        styleDecorator(Theme.LIGHT),
        routerDecorator(),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
