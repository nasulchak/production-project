import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getCanEditAricle } from '../../model/selectors/article/article';

interface ArticleDetailsPageProps {
    className?: string;
}

export const ArticleDetailsPageHeader = ({ className } : ArticleDetailsPageProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditAricle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles_details}${article?.id}/edit`);
    }, [navigate, article?.id]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {
                canEdit && (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEditArticle}
                    >
                        {t('Редактировать')}
                    </Button>
                )
            }
        </HStack>
    );
};
