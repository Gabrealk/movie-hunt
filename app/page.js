"use client";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/App.css'
import MovieList from '@/components/MovieList';
import Headerspace from '@/header';

import SearchBox from './SearchBar/SearchBox';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchVaule, setSearchValue] = useState('');

    const getMovieRequest = async(searchVaule) => {
        const url = `http://www.omdbapi.com/?s=${searchVaule}&apikey=2e023f33`;
        const response = await fetch(url);
        const responsJson = await response.json();
       
        if (responsJson.Search) {
            setMovies(responsJson.Search);
          }
    };

    useEffect(()=> {
        getMovieRequest(searchVaule);
    }, [searchVaule]);

    return (
        <div className='container-fluid movie-app'>
            <div className='d-flex align-items-center mt-4'>
                <Headerspace /> 
                <SearchBox searchVaule={searchVaule} setSearchValue={setSearchValue}/>
            </div>
            <div className='row'>
            <MovieList movies={movies} />
            </div>
            <div className="flex flex-col items-center"> 
        <div className=' m-4 '>
          <div className="grid grid-cols-5 gap-2"> 
                  <div>
                      <image src="//placehold.it/250" alt="" />
                      <h3>m1</h3>
                  </div>
                  <div>
                      <image src="//placehold.it/250" alt="" />
                      <h3>m2</h3>
                  </div>
                  <div>
                      <image src="//placehold.it/250" alt="" />
                      <h3>m3</h3>
                  </div>
                  <div>
                      <image src="//placehold.it/250" alt="" />
                      <h3>m4</h3>
                  </div>
                  <div>
                      <image src="//placehold.it/250" alt="" />
                      <h3>m5</h3>
                  </div>
                  <div>
                      <image src="//placehold.it/250" alt="" />
                      <h3>m6</h3>
                  </div>
                  <div>
                      <image src="//placehold.it/250" alt="" />
                      <h3>m7</h3>
                  </div>
                  <div>
                      <image src="//placehold.it/250" alt="" />
                      <h3>m8</h3>
                  </div>
                  <div>
                      <image src="//placehold.it/250" alt="" />
                      <h3>m9</h3>
                  </div>
                  <div>
                      <image src="//placehold.it/250" alt="" />
                      <h3>m10</h3>
                  </div>  
            </div>
        </div>          
      </div>
            
        </div>
    );
};

export default App;

