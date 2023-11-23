import React from 'react';
import GenreButton from './buttons/GenreButtons';
import YearButton from './buttons/YearButton';
import FavoritesButton from './buttons/favoritesButton';
import SearchBar from './SearchBar/SearchBar'

export default function Home() {
  return (
    <main className="flex bg-screen bg-blue-800">
      <div className="flex ">
        <font size = "10"><h1 className="font-bold">movie-hunt</h1></font>
      </div>

      <div>
        <GenreButton />
        <YearButton />
        <FavoritesButton />
      </div>

      <SearchBar />
      

    </main>
  )
}
