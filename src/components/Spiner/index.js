import React from 'react'

const Spiner = () => {
    return (
        <div className="mx-auto h-100">
            <div className="spinner-border m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spiner
