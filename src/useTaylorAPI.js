import { useEffect, useState } from 'react';

export default function useTaylorAPI() {
  const [taylorQuote, setTaylorQuote] = useState([]);
  const [taylorImg, setTaylorImg] = useState('');

  const fetchQuote = () => {
    fetch('https://api.taylor.rest/')
      .then((resp) => resp.json())
      .then((quote) => {
        setTaylorQuote(quote);
      });
  };

  const fetchImg = () => {
    fetch('https://api.taylor.rest/image')
      .then((resp) => resp.json())
      .then((image) => {
        console.log(image)
        setTaylorImg(image);
      });
  };

  useEffect(() => {
    fetchQuote();
    fetchImg();
  }, []);

  return [taylorQuote.quote, taylorImg.url];
}
