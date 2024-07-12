import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User/model/consts/consts';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage/ui';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';

export type AppRoutesProps = RouteProps & {
    authOnly? : boolean;
    roles?: UserRole[];
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',
    ARTICLES_CREATE = 'articles_create',
    ARTICLES_EDIT = 'articles_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // LAST
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/', // +id
    [AppRoutes.ARTICLES_CREATE]: '/articles/new',
    [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePath.main,
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePath.about,
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: `${RoutePath.profile}:id`,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        element: <ArticlePage />,
        path: RoutePath.articles,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        element: <ArticleDetailsPage />,
        path: `${RoutePath.articles_details}:id`,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_CREATE]: {
        element: <ArticleEditPage />,
        path: `${RoutePath.articles_create}`,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_EDIT]: {
        element: <ArticleEditPage />,
        path: `${RoutePath.articles_edit}`,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        element: <AdminPanelPage />,
        path: RoutePath.admin_panel,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        element: <ForbiddenPage />,
        path: RoutePath.forbidden,
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePath.not_found,
    },
};
