import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0); // count (state), setCount (setState)
    const handleClickIncrease = () => {
        setCount(count + 1);
    };
    const handleClickDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={handleClickIncrease}>Increase</button>
            <button onClick={handleClickDecrease}>Decrease</button>
        </div>
    );
};

export default Counter;