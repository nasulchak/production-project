import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface AvatarDropDownProps {
    className?: string;
}

export const AvatarDropDown = (props: AvatarDropDownProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispath = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const onLogout = useCallback(() => {
        dispath(userActions.logout());
    }, [dispath]);

    const isAdminPanelAvailable = isAdmin || isManager;
    const authData = useSelector(getUserAuthData);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            items={[
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData.id),
                },
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Админка'),
                              href: getRouteAdmin(),
                          },
                      ]
                    : []),
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Avatar fallbackInverted size={30} src={authData.avatar} />
            }
            direction="bottom left"
        />
    );
};
