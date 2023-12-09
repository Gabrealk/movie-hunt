"use client";

import React, { useState } from 'react';


const MovieFilter = ({ onFilter }) => {
    const [year, setYear] = useState('');
  
    const handleYearChange = (event) => {
      setYear(event.target.value);
    };
  
    const handleFilterClick = () => {
      onFilter(year);
    };
  
    return (
      <div>
        <label htmlFor="yearInput">Enter Year: </label>
        <input
          type="text"
          id="yearInput"
          value={year}
          onChange={handleYearChange}
        />

            <div>
                <button onClick={handleFilterClick} 
                    className="font-bold px-7 py-2 
                    text-black 
                    bg-gray-600 border-2 
                    border-black m-4 rounded 
                    hover:bg-blue-200">
                    Filter by year
                </button>
            </div>
      </div>
    );
  };
  
  export default MovieFilter;

