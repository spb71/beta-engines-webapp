import React from 'react';
import { Link } from 'react-router-dom'


const Nav = props => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <Link className="nav-link" to="reg">Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="log">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="log">Cars for Sale</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">Sell Cars</a></li>
                                    <li><a class="dropdown-item" href="/">Update Sale Information</a></li>
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