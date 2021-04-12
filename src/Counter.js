import useCounter from './useCounter';

export default function Counter() {
    const [count, upCount, downCount] = useCounter(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={upCount}>Increase Count</button>
            <button onClick={downCount}>Decrease Count</button>        
        </div>
    )
}
