import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('Описание сайта')}
        </Page>
    );
};

export default AboutPage;
