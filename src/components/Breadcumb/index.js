import React from 'react'
import { Link } from 'react-router-dom'

const Breadcumb = ({ movieTitle }) => {
    return (
        <div className="container-fluid bg-secondary bg-gradient">
            <div className="container">
                <div className="row py-3">
                    <div className="col-12">
                        <ol className="breadcrumb mb-0 text-white">
                            <li className="breadcrumb-item">
                                <Link to='/' className="text-info">
                                    <span className=""> Home </span>
                                </Link></li>
                            <li className="breadcrumb-item">{movieTitle}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcumb;
