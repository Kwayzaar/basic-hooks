import React, {useState, useEffect} from 'react'

export default function Combo() {
    const [count, setCount] = useState(0)
    const [taylorQuote, setTaylorQuote] = useState([])
    const [taylorImg, setTaylorImg] = useState("")

    // NOTE: This is the same as doing this:
    // const count = useState(0)[0]
    // const setCount = useState(0)[1]
    
    const handleIncrease = () => {
        setCount(count + 1)
    }

    const fetchQuote = () => {
        fetch("https://api.taylor.rest/")
        .then(resp =>  resp.json())
        .then(quote => {setTaylorQuote(quote)})
    }

    const fetchImg = () => {
        fetch("https://api.taylor.rest/image")
        .then(resp =>  resp.json())
        .then(image => {setTaylorImg(image)})
    }

    useEffect(() => {
        fetchQuote()
        fetchImg()
    }, [count])

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrease}>Increase Count</button>
            
            <p>{taylorQuote.quote}</p>
            <img src={taylorImg.url} alt="taylor"/>
            
        </div>
    )
}
