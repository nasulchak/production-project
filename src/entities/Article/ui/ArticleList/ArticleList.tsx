import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletos = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 15 : 3)
    .fill(0)
    .map((item, index) => (<ArticleListItemSkeleton className={cls.card} key={index} view={view} />));

export const ArticleList = memo((props : ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        target = '_parent',
        view = ArticleView.SMALL,
    } = props;

    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }
    return (

        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles.map((item) => (
                    <ArticleListItem
                        article={item}
                        view={view}
                        target={target}
                        key={item.id}
                        className={cls.card}
                    />
                ))
            }

            {
                isLoading && getSkeletos(view)
            }
        </div>

    );
});
