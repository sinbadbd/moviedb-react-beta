import React from 'react'
import { Link } from 'react-router-dom';

const List = ({ id, name, image, releaseDate, overView, clickble }) => {
    return (
        <div className="row mb-3 shadow-sm border">
            <div className="col-1 pl-0 d-flex align-items-center">
                { 
                    clickble ? (
                        <Link to={`/movie/${id}/${name}` }>
                            <img className="img-fluid rounded"
                                src={image} alt={name}>
                            </img>
                        </Link>) : (<img className="img-fluid rounded"
                            src={image} alt={name}>
                        </img>)
                }
            </div>
            <div className="col-11 p-2">
                {
                    clickble ? (
                        <Link to={`/movie/${id}/${name}` }>
                            <h6 className="text-sm">
                                {name}</h6>
                        </Link>) : (<h6 className="text-sm">
                            {name}</h6>)

                }

                <p className="m-0 text-black-50">{releaseDate}</p>
                <p className="m-0">{overView}</p>
            </div>
        </div>
    )
}

export default List
