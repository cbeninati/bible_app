import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function VerseRangeForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramsObj = Object.fromEntries(params.entries());

  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');
  const [apiRes, setApiRes] = useState({});

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
      setApiRes(data);
    }
  }, [data])

  const handleStartChange = (event) => {
    if (Number(event.target.value) > endValue) setEndValue(Number(event.target.value));
    setStartValue(Number(event.target.value));
  };

  const handleEndChange = (event) => {
    if (Number(event.target.value) < startValue) setStartValue(Number(event.target.value))
    setEndValue(Number(event.target.value));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const translatedChapter = apiRes.chapterData.content;
    const originalChapter = apiRes.chapterDataOriginal.content;
    const data = {
      translatedChapter,
      originalChapter,
      startValue,
      endValue,
      chapterAbbr: paramsObj.chapter
    }

    axios.post(`${process.env.REACT_APP_SERVER_URL}${location.pathname}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err)
      })
  };

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
   <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="dropdown">Select a verse range:<br/></label>
      <select id="dropdown" value={startValue} onChange={handleStartChange}>
        <option value="" disabled>Select an option</option>
        {data.verseArray.map(verseNum => (
          <option key={verseNum} value={verseNum}>{verseNum}</option>
        ))}
      </select>
      <label htmlFor="dropdown"></label>
      <select id="dropdown" value={endValue} onChange={handleEndChange}>
        <option value="" disabled>Select an option</option>
        {data.verseArray.map(verseNum => (
          <option key={verseNum} value={verseNum}>{verseNum}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default VerseRangeForm;
