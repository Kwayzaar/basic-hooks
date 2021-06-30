import React, { useState, useEffect } from 'react'

const quoteURL = "https://api.taylor.rest/"
const imgURL = "https://api.taylor.rest/image"

export default function Data() {
    const [quote,setQuote] = useState("")
    const [image, setImage] = useState("")
    
    const fetchQuote = () => {
        fetch(quoteURL)
        .then(resp => resp.json())
        .then(quote => setQuote(quote.quote))
    }

    const fetchImage = () => {
        fetch(imgURL)
        .then(resp => resp.json())
        .then(quote => setImage(image.url))
    }

    return (
        <div>
            <h3>***Insert Taylor Swift Quote Here***</h3>
            <img alt="taylor" />
        </div>
    )
}
