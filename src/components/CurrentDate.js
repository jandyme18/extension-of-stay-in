import React, { useState, useEffect } from 'react';

export const CurrentDate = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const current = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(current)
    }
  });

  return (
    <>  {date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    })} <br /> {date.toLocaleTimeString('en-US', { hour12: false })}</>
  )
}

export default CurrentDate;