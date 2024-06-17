import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18n from '../../../config/i18n/i18nConfigForTest';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>,
    );
}
