import React from 'react'
import banner from './assets/banner.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container d-flex justify-content-between">
                {/* The GDG OC SDSF banner will be displayed on screens larger than 768px */}
                <div className="d-none d-md-block justify-content-start">
                    <a className="navbar-brand" href="/">
                        <img src={banner} alt="Bootstrap" width="350" />
                    </a>
                </div>
                {/* The GDG OC SDSF banner will be displayed on screens smaller than 768px */}
                <div className="d-block d-md-none">
                    <a className="navbar-brand" href="/">
                        <img src={banner} alt="Bootstrap" width="220" />
                    </a>
                </div>
                {/* Toggle button will be displayed on screens smaller than 768px */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/flashback">Flashback</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar