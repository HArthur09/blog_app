'use client';

import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';




const Navbar = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return (
        
        <div>
            {/*code pour le button GFG Blogs */}
            <nav className="navbar navbar-expand-lg navbar-light 
                bg-dark bg-opacity-75 fixed-top text-light">
                <div className="container">
                    <Link className="navbar-brand 
                        text-light font-bold" href="/">
                        GFG Blogs
                    </Link>
                    <button className="navbar-toggler"
                        type="button" 
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav"
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/*code pour le lien Home et create new blog */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link href="/" className="nav-item nav-link text-light">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Createblog"
                                    className="nav-item nav-link 
                                               text-light">
                                    Create new Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
