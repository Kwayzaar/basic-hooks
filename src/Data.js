import useTaylorAPI from './useTaylorAPI';

export default function Data() {
  const [quote, imageUrl] = useTaylorAPI();

  return (
    <div>
      <p>{quote}</p>
      <img src={imageUrl} alt="taylor" />
    </div>
  );
}
