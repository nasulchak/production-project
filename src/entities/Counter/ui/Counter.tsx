import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispath = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const { t } = useTranslation();

    const increment = () => {
        dispath(counterActions.increment());
    };

    const decrement = () => {
        dispath(counterActions.decrement());
    };

    return (
        <div>
            <h1
                data-testid="value-title"
            >
                {counterValue}
            </h1>
            <Button
                data-testid="increment-button"
                onClick={increment}
            >
                {t('Увеличить')}
            </Button>
            <Button
                data-testid="decrement-button"
                onClick={decrement}
            >
                {t('Уменьшить')}
            </Button>
        </div>
    );
};
