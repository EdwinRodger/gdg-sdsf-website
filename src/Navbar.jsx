import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-secondary">
            <div class="container">
                <div class=" d-flex justify-content-start">
                    <a class="navbar-brand" href="/">
                        <img src="https://imgur.com/UHzcg8X.jpg" width="350" class="d-inline-block align-top" alt="GDG OC SDSF Logo" />
                    </a>
                </div>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav lead">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar