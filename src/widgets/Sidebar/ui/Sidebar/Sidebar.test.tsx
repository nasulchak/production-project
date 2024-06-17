import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    });

    test('test togle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle-sidebar');
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
    });
});
