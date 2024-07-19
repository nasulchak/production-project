import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18n from '../../../config/i18n/i18nConfigForTest';
// eslint-disable-next-line feature-sliced-custom-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line feature-sliced-custom-plugin/layer-imports
import '@/app/styles/index.scss';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestProviderProps {
    children: ReactNode;
    options?: ComponentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
    const {
        children,
        options = {},
    } = props;

    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState as StateSchema}>
                <ThemeProvider initialTheme={theme}>
                    <div id="root" className={`${theme}`}>
                        {children}
                    </div>
                </ThemeProvider>
                <I18nextProvider i18n={i18n} />
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    return render(
        <TestProvider options={options}>{component}</TestProvider>,
    );
}
