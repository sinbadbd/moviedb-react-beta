import React from 'react';
import { useParams } from 'react-router-dom';

import { useMovieFetch} from '../hooks/useMovieFetch';
import { POSTER_SIZE,IMAGE_BASE_URL, BACKDROP_SIZE} from '../Config';

import Breadcumb from './Breadcumb/index'
import Spiner from './Spiner';
import MovieInfo from './MovieInfo';
import Actor from './Actor';

function Movie() {
    const {movieId} = useParams()
    const { state:movie, loading, error} = useMovieFetch(movieId);

    console.log(movie)
    console.log(movieId)

    if(loading) return <Spiner/>
    if(error) return <div>Something went wrong</div>;

    return (
        <div>
            <Breadcumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie}/>
            
            <div className="row"> 
                {movie.actors.map(actor => (
                        <div key={actor.credit_id} className="col-lg-1 col-2">
                            <Actor 
                                imageURL={
                                    actor.profile_path ? 
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` 
                                    : 'no image'
                                }
                                name={actor.name}
                                charecter={actor.character}
                        />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Movie
