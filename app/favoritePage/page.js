//Imports for Usecases
"use client";
import React, { useEffect, useState } from 'react';

//Imports for styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/App.css'

//Imports for components
import MovieList from '@/components/MovieList';
import Headerspace from '@/header';
import ListHeading from '@/components/ListHeading';
import RemoveFavourites from '@/components/RemoveFavourites';
import Link from 'next/link';


const Page = () => {
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

    //option to remove your favorite movie from the favorite page
    const removeFavMovie = (movie) => {
        const newFavList = Favourites.filter((fav) => fav.imdbID !== movie.imdbID);
        setFavourites(newFavList);
        saveLocalStorage(newFavList);
    };

    return (
        <div className='container-fluid movie-app'>
            <div className='d-flex align-items-center mt-4'>
                <ListHeading heading='Favourites'/>
            </div>

            <div>
                <MovieList movies={Favourites} handleFavClick={removeFavMovie} favouriteComponent={RemoveFavourites}/>
            </div>

            {/*simple back button to return to the homepage */}
            <button className="font-bold px-7 py-2 
                    text-black 
                    bg-gray-600 border-2 
                    border-black m-4 rounded 
                    hover:bg-blue-200
                    ">
                <p><Link href ="../">HomePage</Link></p>
            </button>
        </div>
        
    
    );
};

export default Page;