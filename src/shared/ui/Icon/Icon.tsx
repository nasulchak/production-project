import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = (props : IconProps) => {
    const {
        className,
        SVG,
        inverted,
    } = props;

    return (
        <SVG className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    );
};
