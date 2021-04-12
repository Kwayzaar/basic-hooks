import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    // NOTE: This is the same as doing this:
    // const count = useState(0)[0]
    // const setCount = useState(0)[1]
    
    const handleIncrease = () => {
        setCount(count + 1)
    }
    

    return (
        <div>
            <p>Count: {count}</p>
            {/* Just Showing Two ways of doing this */}
            <button onClick={handleIncrease}>Increase Count</button>
            <button onClick={() => { setCount(count - 1)}}>Decrease Count</button>        
        </div>
    )
}
