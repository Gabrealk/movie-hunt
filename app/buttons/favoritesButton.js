"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function FavoritesButton() {
        const [selectedGenreOption, setSelectedGenreOption] = useState("Select Genre");
        const [isGenreDropdownOpen, setGenreDropdownOpen] = useState(false);
    //different options for the genre button
        const options = ["Action", "Adventure", "Comedy", "Drama", "Sci-Fi"];
    //option handler for the genre button, once a genre is picked it selects it and will trigger other code, in correspondance with the API
        const handleOptionSelect = (option) => {
            setSelectedGenreOption(option);
            setGenreDropdownOpen(false);
        };


  return (
        <main className="relative inline-block text-black">


            <div>
                <button className="font-bold px-7 py-2 
                    text-black 
                    bg-gray-600 border-2 
                    border-black m-4 rounded 
                    hover:bg-blue-200">
                        <Link href="favoritePage">Favorites</Link>
                </button>
            </div>



        </main>

    );
}
