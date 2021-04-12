import React from 'react'

export default function Counter() {

    const handleIncrease = () => {
        console.log("increase my state")
    }


    return (
        <div>
            <p>Count: </p>
            <button onClick={handleIncrease}>Increase Count</button>
            <button onClick={() => console.log("decrease my state")}>Decrease Count</button>
        </div>
    )
}
