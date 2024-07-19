import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();

    const { t } = useTranslation();

    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-button" onClick={handleIncrement}>
                {t('Увеличить')}
            </Button>
            <Button data-testid="decrement-button" onClick={handleDecrement}>
                {t('Уменьшить')}
            </Button>
        </div>
    );
};
