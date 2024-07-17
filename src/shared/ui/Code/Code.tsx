import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';
import { Button } from '../Button';
import { ButtonTheme } from '../Button/ui/Button';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props : CodeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, { }, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon} />
                {/* <Icon SVG={CopyIcon} /> */}
            </Button>
            <code>
                {text}
            </code>
        </pre>

    );
});
