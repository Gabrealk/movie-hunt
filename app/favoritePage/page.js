"use client";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/App.css'
import MovieList from '@/components/MovieList';
import Headerspace from '@/header';
// import AddFavourite from '@/components/AddFavorites';
import ListHeading from '@/components/ListHeading';
import RemoveFavourites from '@/components/RemoveFavourites';
import Link from 'next/link';


const Favpage = () => {
    const [movies, setMovies] = useState([]);
    const [searchVaule, setSearchValue] = useState('');
    const [Favourites, setFavourites] = useState([]);

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

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('movie-fav-app')) || [];
        setFavourites(movieFavourites);
    }, []);
    

    const saveLocalStorage = (items) => {
        localStorage.setItem('movie-fav-app', JSON.stringify(items))
    };

    // const addFavMovie = (movie) => {
    //     const newFavList = [...Favourites, movie];
    //     setFavourites(newFavList);
    //     saveLocalStorage(newFavList);
    // };

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

export default Favpage;