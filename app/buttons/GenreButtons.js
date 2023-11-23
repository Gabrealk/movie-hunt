"use client";

import React, { useState } from 'react';

export default function GenreButton() {
    //state variables for the genre buttons
        const [selectedGenreOption, setSelectedGenreOption] = useState("Select Genre");
        const [isGenreDropdownOpen, setGenreDropdownOpen] = useState(false);
    //different options for the genre button
        const options = ["Action", "Adventure", "Comedy", "Drama", "Sci-Fi"];
    //option handler for the genre button, once a genre is picked it selects it and will trigger other code, in correspondance with the API
        const handleOptionSelect = (option) => {
            setSelectedGenreOption(option);
            setGenreDropdownOpen(false);
        };
    //state variables for the year buttons

    //state variables for the favorites button


  return (
        <main className="relative inline-block text-black">

            <div>
                <button
                    onClick={() => setGenreDropdownOpen(!isGenreDropdownOpen)}
                    className="font-bold px-7 py-2 
                    text-black 
                    bg-blue-700 border-2 
                    border-black m-4 rounded 
                    hover:bg-blue-500"
                    >
                    {selectedGenreOption}
                </button>

                {isGenreDropdownOpen && (
                    <div className="absolute mt-2 bg-white border border-gray-500 rounded shadow-md">
                        {options.map((option) => (
                            <div key={option} className="px-4 py-2 cursor-pointer hover:bg-blue-500" onClick={() => handleOptionSelect(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </main>
 
    );
}

