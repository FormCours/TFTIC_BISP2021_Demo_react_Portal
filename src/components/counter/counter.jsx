import PropTypes from 'prop-types';
import { useState } from 'react';

const Counter = (props) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((oldState) => oldState + 1);
    }

    const reset = () => {
        setCount(props.resetValue);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+++</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

Counter.defaultProps = {
    resetValue: 0
}

Counter.propTypes = {
    resetValue: PropTypes.number
}

export default Counter;