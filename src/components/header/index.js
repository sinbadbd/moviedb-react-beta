import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';


const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={'/'}>
                    <img src={logo} style={{width: '250px'}}></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Movie
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <Link to={'/nowplay'} className="dropdown-item">Now Playing</Link>
                                <Link to={'/upcomming'} className="dropdown-item">Up Comming</Link>
                                <Link to={'/toprated'} className="dropdown-item">Top Rated</Link>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tv</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;