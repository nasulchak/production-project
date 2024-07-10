import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { getArticleCommentsIsError, getArticleCommentsIsLoading } from '../../model/selectors/comments/comments';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string
}

export const ArticleDetailsComments = ({ className, id } : ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsIsError);

    const dispatch = useDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack gap="4" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Комментарии')}
            />

            <AddCommentForm
                onSendComment={onSendComment}
            />

            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
};
