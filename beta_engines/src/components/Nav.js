import React from 'react';
import { Link } from 'react-router-dom'


const Nav = props => {
    return (
        <div>

            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Beta Engines</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="reg" id="navbar">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="log" id="navbar">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="view" id="navbar">Cars for Sale</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <Link className="nav-link" to="buy">Buy Cars</Link>
                                    <Link className="nav-link" to="sell">Sell Cars</Link>
                                    <Link className="nav-link" to="update">Update Sale Information</Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};





export default Nav;