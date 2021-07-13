import React from 'react'

const TopBanner = ({ name, totalMovie }) => {
    return (
        <div className="container-fluid  bg-success bg-gradient">
            <div className="container">
                <div className="row py-3">
                    <div className="col-11">
                        <h3 className="text-white">{name}</h3>
                    </div>
                    <div className="col-1">
                        <h3 className="text-white">{totalMovie}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner
