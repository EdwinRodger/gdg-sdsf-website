import React from 'react'
import banner from './assets/banner.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-md bg-body-tertiary">
            <div class="container d-flex justify-content-between">
                {/* The GDG OC SDSF banner will be displayed on screens larger than 768px */}
                <div class="d-none d-md-block justify-content-start">
                    <a class="navbar-brand" href="/">
                        <img src={banner} alt="Bootstrap" width="350" />
                    </a>
                </div>
                {/* The GDG OC SDSF banner will be displayed on screens smaller than 768px */}
                <div class="d-block d-md-none">
                    <a class="navbar-brand" href="/">
                        <img src={banner} alt="Bootstrap" width="220" />
                    </a>
                </div>
                {/* Toggle button will be displayed on screens smaller than 768px */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
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