import React from 'react'
import PropTypes from 'prop-types';

const RightSideBarInfo = ({ movieStatus, revenue,voteCount}) => {
    return (
        <div>
            <p>
                <b>Status</b>
                <span className="d-block">{movieStatus}</span>
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
