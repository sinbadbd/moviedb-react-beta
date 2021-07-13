import React from 'react'
import Thumb from './Thumb/index';
import ProgressBar from '../Utils/ProgressBar';

import { POSTER_SIZE,IMAGE_BASE_URL} from '../Config';
import placeholder from '../images/placeholder.png';
const MovieInfo = ({movie}) => {
    // const backgroundImg = movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`;
    const rating = movie.vote_average * 10
    return (
        <div className="container-fluid hero" 
            style={{ backgroundImage: `url(${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path})`, 
            repeat: false,backgroundSize:'cover',}}> 
            <div className="row position-relative py-5">
                <div className="col-lg-3">
                    <Thumb
                        image={
                            movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : placeholder
                        }
                        clickble={false}
                        // movieId={movie.id}
                    />

                </div>
                <div className="col-lg-9 text-white">
                       <h2 className="">{movie.original_title}</h2>
                        <span className="">{movie.release_date} </span>
                        { movie.genres.map(genre => (
                                <span key={genre.id}> &#8226; { genre.name } </span>
                            ))
                        }

                       <span>| {movie.runtime}m</span>  
                       <div className="row">
                           <div className="col-auto">
                                <div className="bd-dark progressbarBg">
                                    <ProgressBar strokeWidth={6} percentage={rating} />      
                                </div>
                                <span className="text-small">User Score</span>
                           </div>
                           {/* <div className="col-auto">
                               <div className="circleButton">

                               </div>
                            </div>
                           <div className="col-auto">
                               <div className="circleButton">
                                   
                               </div>
                            </div>
                            <div className="col-auto">
                               <div className="circleButton">
                                   
                               </div>
                            </div>
                            <div className="col-auto">
                               <div className="circleButton">
                                   
                               </div>
                            </div> */}
                       </div>
                        
                       {/* <p>{rating}</p> */}
                       <p className="text-gray mt-2">{movie.tagline}</p>
                       <h4>Overview</h4>
                       <p>{movie.overview}</p>   
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
// image, movieId, clickble
//"release_date": "1999-10-12",
// "revenue": 100853753,
// "runtime": 139,