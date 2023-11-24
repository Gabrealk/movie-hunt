import React from 'react';
import GenreButton from './app/buttons/GenreButtons';
import YearButton from './app/buttons/YearButton';
import FavoritesButton from './app/buttons/favoritesButton';
import SearchBarFunction from './app/SearchBar/SearchBar';

export default function Headerspace() {
    
    return (
    
    <div className="flex">
        <font size = "10"><h1 className="font-bold text-white">movie-hunt</h1></font>
        {/* <h1 className="font-bold text-white text-5xl">movie-hunt</h1> */}
        <GenreButton />
        <YearButton />
        <FavoritesButton />
        <SearchBarFunction />
      </div>
      )
}
