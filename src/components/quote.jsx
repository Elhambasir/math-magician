import React, { useState, useEffect } from 'react';

export default function Quote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const mystyle = {
    listStyleType: 'none',
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
          method: 'GET',
          withCredentials: true,
          headers: {
            'X-Api-Key': 'ZCgl8KYeSiqWDLrmf04t1w==xr9OFQ2sOu8X8MW1',
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);
  if (hasError) return <div>Something went wrong!</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="quoteContainer">
      <ul style={mystyle}>
        {data.map((item) => (
          <li key={item.quote}>
            <b>{item.author}</b>
            <br />
            {item.quote}
          </li>
        ))}
      </ul>
    </div>
  );
}
