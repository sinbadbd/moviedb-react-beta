import React from 'react'
import { Link } from 'react-router-dom'

const Breadcumb = ({movieTitle}) => {
    return ( 
       <div className="container-fluid">
            <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-light bg-light">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to='/'>
                                <span className=""> Home </span> 
                            </Link></li>
                        <li className="breadcrumb-item">{movieTitle}</li>
                    </ol>
                </nav>
            </div>
        </div>
       </div>
      
    )
}

export default Breadcumb;
