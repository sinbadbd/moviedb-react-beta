import React from 'react'
import PropTypes from 'prop-types';

const Actor = ({name, charecter, imageURL}) => {
    return (
        <div>
            <img className="img-fluid rounded" src={imageURL} alt="" />
            <h6>{name}</h6>
            <p>{charecter}</p>
        </div>
    )
}

Actor.prototype = {
    name : PropTypes.string,
    charecter : PropTypes.string,
    imageURL : PropTypes.string
}

export default Actor
