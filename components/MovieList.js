import React from 'react';
import Image from 'next/image';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='d-flex justify-content-start m-4' key={index}>
          <img src={movie.Poster} alt='movie' />
        </div>
      ))}
    </>
  );
};

export default MovieList;
