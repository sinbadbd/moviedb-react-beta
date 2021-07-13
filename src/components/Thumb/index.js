import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Thumb = ( { image,name, movieId, clickble,isShowPopup}) => {
    return ( 
        <>
           {clickble ? (
               <Link to={`/movie/${movieId}/${name}`}>
                 <img className="img-fluid rounded" src={image}></img>
               </Link>
           ) : (
                <img className="img-fluid rounded" src={image}></img>
           )
            
           }
            
        </>
    )
}

Thumb.prototype = {
    image: PropTypes.string,
    movieId: PropTypes.integer,
    clickble: PropTypes.bool
}

export default Thumb;