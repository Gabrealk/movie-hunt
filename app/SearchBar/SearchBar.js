"use client";

import React, { useState } from 'react';

export default function SearchBarFunction() {
    const [search, setSearch] = useState("");

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearch = () => {
        console.log('Search query:', search);
        // Add the search logical stuff here, like implementing the eventual API
    };

    return (
        <main>
            <div className="px-48 text-black ">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    className="rounded-full p-2"
                    onChange={handleSearchChange}
                />

                <button onClick={handleSearch} className="font-bold 
                            px-7 py-2 
                            bg-blue-700 
                            border-2 border-black m-4 rounded 
                            hover:bg-blue-500
                            ">Search
                </button>
            </div>
            
        </main>
    );
}