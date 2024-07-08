import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <Counter />
            {t('Главная страница')}
            <HStack>
                <ListBox
                    defaultValue="Выберите значение"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '11' },
                        { value: '2', content: '22' },
                        { value: '3', content: '33', disabled: true },
                    ]}
                />
            </HStack>
        </Page>
    );
});

export default MainPage;
