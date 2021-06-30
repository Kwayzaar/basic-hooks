import React, { useState } from 'react'


export default function Counter() {

    const [count, setCount] = useState(0)
    
    const handleIncrease = () => {
        setCount(count + 1)
    }



    return (
        <div>
            <p>Count: {count} </p>
            <button onClick={handleIncrease}>Increase Count</button>
            <button onClick={() => setCount(count - 1)}>Decrease Count</button>
        </div>
    )
}
