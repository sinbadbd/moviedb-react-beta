import React from 'react'
import PropTypes from 'prop-types';

const RightSideBarInfo = ({website, movieStatus, revenue,voteCount, language, Budget}) => {
    return (
        <div>
            <p>
                <b className="d-block">Homepage</b>
                <a href={website} target="_blank" className="d-inline-block btn btn-primary btn-sm">View</a>
            </p>
            <p>
                <b>Status</b>
                <span className="d-block">{movieStatus}</span>
            </p>
            <p> 
                <b>Budget</b>
                <span className="d-block">${Budget}</span>
            </p>
            <p> 
                <b>Revenue</b>
                <span className="d-block">${revenue}</span>
            </p>
            <p> 

                <b>Vote Count</b>
                <span className="d-block">Total: {voteCount}</span>
            </p>
            
        </div>
    )
}


RightSideBarInfo.prototype = {
    movieStatus : PropTypes.string,
    revenue : PropTypes.number,
    voteCount : PropTypes.number,
}


export default RightSideBarInfo
