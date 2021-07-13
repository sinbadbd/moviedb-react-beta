import React from 'react'
import { Link } from 'react-router-dom'
const KeywordButton = ({ id, name, clickble }) => {
    return (
        <div className="col-auto px-1 mb-1">
            {
                clickble ? (
                    <Link to={`/keyword/${id}/${name}`}
                        type="button"
                        className="btn btn-secondary btn-sm m-0">{name}
                    </Link>) : (<button className="btn btn-secondary btn-sm m-0">{name}</button>)
            }
        </div>
    )
}

export default KeywordButton
// /keyword:keywordId/:name