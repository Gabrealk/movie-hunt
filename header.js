import React from 'react';
import GenreButton from './app/buttons/GenreButtons';
import YearButton from './app/buttons/YearButton';
import FavoritesButton from './app/buttons/favoritesButton';
import SearchBox from './app/SearchBar/SearchBox';

export default function Headerspace() {
    
    return (
    <div className="flex">
        <font size = "10"><h1 className="font-bold text-white m-4">movie-hunt</h1></font>
        <GenreButton />
        <YearButton />
        <FavoritesButton />
      </div>
      )
}