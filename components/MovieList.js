// import React from 'react';

// const FavouriteComponet = props.favouriteComponet;
// const MovieList = (props) => {
//   return (
//     <>
//       {props.movies.map((movie, index) => (
//         <div className='image-container d-flex justify-content-start m-4' key={index}>
//           <img src={movie.Poster} alt='movie' />
//           <div className='overlay d-flex align-items-cneter justify-center '></div>
//           <FavouriteComponet />
//         </div>
//       ))}
//     </>
//   );
// };

// export default MovieList;

import React from 'react';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div className='flex flex-wrap'>
      {props.movies && props.movies.map((movie, index) => (
        <div className='image-container justify-center m-4' key={index}>
          <img src={movie.Poster} alt='movie' className='w-full h-full object-cover' />
          <div onClick={()=> props.handleFavClick(movie)} className='overlay d-flex align-items-center justify-center '>
            <FavouriteComponent  />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;