import { classNames } from './classNames';

describe('classNames', () => {
    test('with first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered selected';
        expect(
            classNames('someClass', { hovered: true, selected: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, selected: false }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, selected: undefined }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});
