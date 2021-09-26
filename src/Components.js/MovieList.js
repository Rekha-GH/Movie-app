import React from 'react';

const MovieList = (props) => {
    return (
        <div>
            {
                props.movies.map((movie, index) => (
                    <div className="image-container d-flex justify-content-start m-3">
                        <div>
                            <img src={movie.Poster} alt='movie' />
                            <div className='overlay d-flex align-items-center justify-content-center'>
                        </div>
                     </div>
                    </div>
                )
                )}
        </div>
    )
    
    }

export default MovieList;
