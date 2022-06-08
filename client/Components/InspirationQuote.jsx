import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const InspirationQuote = () => {
  const [quote, setQuote] = React.useState('');

  useEffect(() => {
    const options = {
      method: 'POST',
      url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com',
        'X-RapidAPI-Key': 'a83413f590msh6bba55e0ac34d12p1b6da4jsn78047e3a6346',
      },
      data: '{"key1":"value","key2":"value"}',
    };

    axios
      .request(options)
      .then(function (response) {
        console.log('res', response.data);
        setQuote(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (quote) {
    return <h2 className='quote'>{quote}</h2>;
  } else {
    return <h2 className='quote'>Be Inspired, Be Grateful.</h2>;
  }
};

export default InspirationQuote;
