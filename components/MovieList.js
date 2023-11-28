import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='d-flex justify-content-start m-4' key={index}>
          <image src={movie.Poster} alt='movie' />
        </div>
      ))}
    </>
  );
};

export default MovieList;
