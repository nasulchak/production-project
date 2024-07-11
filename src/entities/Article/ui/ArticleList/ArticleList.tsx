import { classNames } from 'shared/lib/classNames/classNames';
import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { useTranslation } from 'react-i18next';
import {
    List as _List, ListProps, ListRowProps, WindowScroller as _WindowScroller,
    WindowScrollerProps,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

const List = _List as unknown as FC<ListProps>;
const WindowScroller = _WindowScroller as unknown as FC<WindowScrollerProps>;

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
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
        virtualized = true,
    } = props;

    const { t } = useTranslation();

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 5;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({ index, key, style }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={`str${i}`}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }
    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {
                ({
                    height, width, registerChild, scrollTop, isScrolling, onChildScroll,
                }) => (
                    <div
                    // @ts-ignore
                        ref={registerChild}
                        className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                    >
                        {
                            virtualized
                                ? (
                                    <List
                                        height={height ?? 700}
                                        rowCount={rowCount}
                                        rowHeight={isBig ? 700 : 330}
                                        rowRenderer={rowRender}
                                        width={width ? width - 80 : 700}
                                        autoHeight
                                        onScroll={onChildScroll}
                                        isScrolling={isScrolling}
                                        scrollTop={scrollTop}
                                    />
                                )
                                : (
                                    articles.map((item) => (
                                        <ArticleListItem
                                            article={item}
                                            view={view}
                                            target={target}
                                            key={item.id}
                                            className={cls.card}
                                        />
                                    ))
                                )
                        }

                        {
                            isLoading && getSkeletos(view)
                        }
                    </div>

                )
            }

        </WindowScroller>

    );
});
