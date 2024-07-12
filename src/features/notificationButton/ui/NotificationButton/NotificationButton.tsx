import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = (props : NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon SVG={NotificationIcon} inverted />
                </Button>
            )}
            direction="bottom left"
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
};
