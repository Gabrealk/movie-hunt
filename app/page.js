"use client";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/App.css'
import MovieList from '@/components/MovieList';
import Headerspace from '@/header';
import SearchBox from './SearchBar/SearchBox';
import AddFavourite from '@/components/AddFavorites';
import ListHeading from '@/components/ListHeading';
// import RemoveFavourites from '@/components/RemoveFavourites';


const App = () => {
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

    const addFavMovie = (movie) => {
        const newFavList = [...Favourites, movie];
        setFavourites(newFavList);
        saveLocalStorage(newFavList);
    };

    // const removeFavMovie = (movie) => {
    //     const newFavList = Favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    //     setFavourites(newFavList);
    //     saveLocalStorage(newFavList);
    // };

    return (
        <div className='container-fluid movie-app'>
            <div className='d-flex align-items-center mt-4'>
                <Headerspace /> 
                <SearchBox searchVaule={searchVaule} setSearchValue={setSearchValue}/>
            </div>
            <div>
                <ListHeading heading='Homescreen'/>
                <MovieList movies={movies} handleFavClick={addFavMovie} favouriteComponent={AddFavourite}/>
            </div>  
            {/* <div>
                <ListHeading heading='Favourites'/>
            </div> 
                <div>
                    <MovieList movies={Favourites} handleFavClick={removeFavMovie} favouriteComponent={RemoveFavourites}/>
                </div> */}
        </div>
        
    
    );
};

export default App;



















// <div className="flex flex-col items-center"> 
//                 <div className=' m-4 '>
//                     <div className="grid grid-cols-5 gap-2"> 
//                         <div>
//                             <img src="//placehold.it/250" alt="" />
//                             <h3>m1</h3>
//                         </div>
//                         <div>
//                             <img src="//placehold.it/250" alt="" />
//                             <h3>m2</h3>
//                         </div>
//                         <div>
//                             <img src="//placehold.it/250" alt="" />
//                             <h3>m3</h3>
//                         </div>
//                         <div>
//                             <img src="//placehold.it/250" alt="" />
//                             <h3>m4</h3>
//                         </div>
//                         <div>
//                             <img src="//placehold.it/250" alt="" />
//                             <h3>m5</h3>
//                         </div>
//                         <div>
//                             <img src="//placehold.it/250" alt="" />
//                             <h3>m6</h3>
//                         </div>
//                         <div>
//                             <img src="//placehold.it/250" alt="" />
//                             <h3>m7</h3>
//                         </div>
//                         <div>
//                             <img src="//placehold.it/250" alt="" />
//                             <h3>m8</h3>
//                         </div>
//                         <div>
//                             <img src="//placehold.it/250" alt="" />
//                             <h3>m9</h3>
//                         </div>
//                         <div>
//                             <img src="//placehold.it/250" alt="" />
//                             <h3>m10</h3>
//                         </div>  
//                     </div>
//                 </div>          
//       </div>