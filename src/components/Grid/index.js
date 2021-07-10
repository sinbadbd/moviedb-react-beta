import React from 'react';

const Gride = ( { header, children}) => {
    return ( 
        <div className="container">
            <div className="row"> 
                <h3 className="my-3">{header}</h3>
                {children}
            </div> 
        </div>

    )
}

export default Gride