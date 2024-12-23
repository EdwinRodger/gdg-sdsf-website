import React from 'react'
import banner from './assets/banner.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-secondary">
            <div class="container">
                <div class=" d-flex justify-content-start">
                    <a class="navbar-brand" href="/">
                        <img src={banner} width="350" class="d-inline-block align-top" alt="GDG OC SDSF Logo" />
                    </a>
                </div>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav gap-3">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/events">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/flashback">Flashback</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/team">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar