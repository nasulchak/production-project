import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = (props : IconProps) => {
    const {
        className,
        SVG,
        inverted,
        ...otherProps
    } = props;

    return (
        <SVG
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
};
