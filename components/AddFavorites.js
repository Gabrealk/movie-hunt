import React from "react";

const AddFavourite = () => {
    return (
        <>
            {/**provides the option to add movies to your list when hovering the movie image*/}
            <span className="mr-2">Add To Favorite</span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="gold" 
                    class="bi bi-plus-circle-fill" 
                    viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                </svg>  
        </>
    );
};

export default AddFavourite;