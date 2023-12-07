//Imports for Usecases
"use client";
import React, { useEffect, useState } from 'react';

//Styling imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/App.css'

//Components imports
import MovieList from '@/components/MovieList';
import Headerspace from '@/header';
import SearchBox from './SearchBar/SearchBox';
import AddFavourite from '@/components/AddFavorites';
import ListHeading from '@/components/ListHeading';

const App = () => {
    //Use state variables
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [Favourites, setFavourites] = useState([]);

    //Fetching the API
    const getMovieRequest = async(searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2e023f33`;
        const response = await fetch(url);
        const responsJson = await response.json();
       
        if (responsJson.Search) {
            setMovies(responsJson.Search);
          }
    };

    useEffect(()=> {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('movie-fav-app')) || [];
        setFavourites(movieFavourites);
    }, []);
    
    //stores the movies locally on the favorite page
    const saveLocalStorage = (items) => {
        localStorage.setItem('movie-fav-app', JSON.stringify(items))
    };

    //option to add your favorite movie from the home page
    const addFavMovie = (movie) => {
        const newFavList = [...Favourites, movie];
        setFavourites(newFavList);
        saveLocalStorage(newFavList);
    };

    return (
        <div className='container-fluid movie-app'>
            <div className='d-flex align-items-center mt-4'>
                <Headerspace /> 
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div>
                <ListHeading heading='Homescreen'/>
                <MovieList movies={movies} handleFavClick={addFavMovie} favouriteComponent={AddFavourite}/>
            </div>  
        </div>
        
    
    );
};

export default App;