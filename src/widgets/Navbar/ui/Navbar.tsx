import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { useTranslation } from "react-i18next"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

    const {t, i18n} = useTranslation()

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about' className={cls.mainLink}>{t('О сайте')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>{t('Главная')}</AppLink>
            </div>
        </div>
    )
} 
