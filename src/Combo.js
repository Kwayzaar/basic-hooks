import React, {useState, useEffect} from 'react'

const quoteURL = "https://api.taylor.rest/"
const imgURL = "https://api.taylor.rest/image"

export default function Combo() {
    const [count, setCount] = useState(0)
    const [quote, setQuote] = useState("")
    const [image, setImage] = useState("")

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const fetchQuote = () => {
        fetch(quoteURL)
        .then(resp => resp.json())
        .then(quote => setQuote(quote.quote))
    }

    const fetchImage = () => {
        fetch(imgURL)
        .then(resp => resp.json())
        .then(image => setImage(image.url))
    }

    useEffect(() => {
        fetchQuote()
        fetchImage()
    }, [count])

    return (
        <div>
            <p>Count: {count} </p>
            <button onClick={handleIncrease}>Increase Count</button>
            <h3>{quote}</h3>
            <img src={image} alt="taylor" />
        </div>
    )
}
