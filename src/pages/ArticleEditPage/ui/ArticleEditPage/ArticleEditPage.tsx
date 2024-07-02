import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = (props : ArticleEditPageProps) => {
    const { className } = props;

    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            {
                isEdit ? 'Редактирование статьи' : 'Создание новой статьи'
            }
        </Page>
    );
};

export default ArticleEditPage;
