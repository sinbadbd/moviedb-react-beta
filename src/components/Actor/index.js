import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Actor = ({actorId,name, charecter, imageURL, isClickable}) => {
    return (
        <div>
            { isClickable ? (
                <Link to={`/actor/${actorId}`}>
                    <img className="img-fluid rounded" src={imageURL} alt={name} />
                </Link>
            ): (<img className="img-fluid rounded" src={imageURL} alt={name} />)
            }
            
            <h6 className="mt-1">{name}</h6>
            <p className="fs-6">{charecter}</p>
            
        </div>
    )
}

Actor.prototype = {
    name : PropTypes.string,
    charecter : PropTypes.string,
    imageURL : PropTypes.string
}

export default Actor
