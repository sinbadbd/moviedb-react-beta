import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Thumb = ( { image, movieId, clickble}) => {
    return ( 
        <>
           {clickble ? (
               <Link to={`/${movieId}`}>
                 <img className="img-fluid rounded" src={image}></img>
               </Link>
           ) : (
                <img className="img-fluid rounded" src={image}></img>
           )}
            
        </>
    )
}

export default Thumb;