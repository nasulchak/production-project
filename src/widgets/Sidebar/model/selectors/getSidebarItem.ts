import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main-20-20.svg?react';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg?react';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg?react';
import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from '@/shared/const/router';

export const getSidebarItem = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                icon: AboutIcon,
                text: 'О сайте',
            },

        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    icon: ArticleIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
