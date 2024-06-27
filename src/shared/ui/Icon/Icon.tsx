import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    SVG: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props : IconProps) => {
    const {
        className,
        SVG,
    } = props;

    return (
        <SVG className={classNames(cls.Icon, {}, [className])} />
    );
};
