import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

// Компнент для тестирования
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw Error;
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('Сгенерировать ошибку')}
        </Button>
    );
};
