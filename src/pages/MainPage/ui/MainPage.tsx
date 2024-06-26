import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            <Counter />
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
