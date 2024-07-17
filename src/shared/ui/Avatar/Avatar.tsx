import { useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
}

export const Avatar = (props : AvatarProps) => {
    const {
        className,
        src,
        alt,
        size = 100,
        fallbackInverted,
    } = props;

    const mods: Mods = {};

    const styles = useMemo(() => (
        {
            width: size,
            height: size,
        }
    ), [size]);

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            errorFallback={<Icon inverted={fallbackInverted} width={size} height={size} SVG={UserIcon} />}
            fallback={<Skeleton width={size} height={size} border="50%" />}
        />
    );
};
