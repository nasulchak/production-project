import { useState } from "react"
import classes from './Counter.module.scss'
export const Counter = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count+1)
    }

    const handleDecrement = () => {
        setCount(count-1)
    }

    return (
        <div>
            {count}
            <button className={classes.btn} onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}