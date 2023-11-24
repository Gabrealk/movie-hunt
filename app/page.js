import React from 'react';
import MovieImage from '@/movieposter/movieimage';
import Headerspace from '@/header';

export default function Home() {
  return (
    <main>
       
      <div className="flex flex-col items-center bg-screen bg-blue-800"> 
        <Headerspace />
        <MovieImage />
      </div>
    </main>
  )
}
