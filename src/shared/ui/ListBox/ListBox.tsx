import { Fragment, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Button } from '../Button';
import { Text } from '../Text';
import { HStack } from '../Stack';

type DropdownDirection = 'top' | 'bottom'

export interface ListBoxItem {
    value: string,
    content: ReactNode,
    disabled?: boolean,
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
        label,
    } = props;

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <Listbox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <Listbox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </Listbox.Button>
                <Listbox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
                    {items?.map((item) => (

                        <Listbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled }, [])}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </HStack>

    );
}
