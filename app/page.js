import React from 'react';
import SortButtons from './buttons/sortButtons';
import SearchBar from './SearchBar/SearchBar'

export default function Home() {
  return (
    <main className="flex bg-screen bg-blue-800">
      <div className="flex ">
        <font size = "10"><h1 className="font-bold">movie-hunt</h1></font>
      </div>

      <SortButtons />
      <SearchBar />
    </main>
  )
}
