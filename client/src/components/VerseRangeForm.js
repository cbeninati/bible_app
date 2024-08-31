import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

function VerseRangeForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramsObj = Object.fromEntries(params.entries());

  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');
  const [verseArray, setVerseArray] = useState([]);

  const fetchVerses = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}${location.pathname}${location.search}`);
    return response.json();
  };
  
  const { isPending, data, error } = useQuery({
    queryKey: [paramsObj.chapter],
    queryFn: fetchVerses,
    staleTime: 600000,
    cacheTime: 300000,
  });

  useEffect(() => {
    if (data) {
      setVerseArray(data.verseArray);
    }
  }, [data])

  const handleStartChange = (event) => {
    if (event.target.value > endValue) setEndValue(event.target.value);
    setStartValue(event.target.value);
  };

  const handleEndChange = (event) => {
    if (event.target.value < startValue) setStartValue(event.target.value)
    setEndValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // call api with verse range included.
    console.log("Submitted value:", startValue);
  };

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
   <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="dropdown">Select a verse range:<br/></label>
      <select id="dropdown" value={startValue} onChange={handleStartChange}>
        <option value="" disabled>Select an option</option>
        {verseArray.map(verseNum => (
          <option key={verseNum} value={verseNum}>{verseNum}</option>
        ))}
      </select>
      <label htmlFor="dropdown"></label>
      <select id="dropdown" value={endValue} onChange={handleEndChange}>
        <option value="" disabled>Select an option</option>
        {verseArray.map(verseNum => (
          <option key={verseNum} value={verseNum}>{verseNum}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default VerseRangeForm;
