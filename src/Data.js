
import React, {useState, useEffect} from 'react'

export default function Data() {

    const [taylorQuote, setTaylorQuote] = useState([])
    const [taylorImg, setTaylorImg] = useState("")

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
    }, [])


    return (
        <div>
            
            <p>{taylorQuote.quote}</p>
            <img src={taylorImg.url} alt="taylor"/>
        </div>
    )
}
