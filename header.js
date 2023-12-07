//React imports
import React from 'react';

//Button imports
import GenreButton from './app/buttons/GenreButtons';
import YearButton from './app/buttons/YearButton';
import FavoritesButton from './app/buttons/favoritesButton';

export default function Headerspace() { 
  return (
    <div className="flex">
        <font size = "10"><h1 className="font-bold text-white m-4">Movie-Hunt</h1></font>
        {/*calling the buttons that were imported */}
        <GenreButton />
        <YearButton />
        <FavoritesButton />
    </div>
  )
}