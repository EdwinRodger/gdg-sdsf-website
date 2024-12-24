import React from 'react'
import gdg_logo from './assets/gdg_logo.png'

const Footer = () => {
    return (
        <>
            <div className='bg-body-tertiary'>
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-4">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1 d-none d-md-block">
                                <img src={gdg_logo} alt="GDG Logo" height="32" />
                            </a>
                            <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Google Developer Groups On Campus School of Data Science and Forecasting</span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><a className="text-body-secondary" href="https://instagram.com/gdgsdsf"><i className="bi bi-instagram"></i></a></li>
                            <li className="ms-3"><a className="text-body-secondary" href="https://www.facebook.com/profile.php?id=100084530138056"><i className="bi bi-facebook"></i></a></li>
                            <li className="ms-3"><a className="text-body-secondary" href="https://x.com/GdgDavv"><i className="bi bi-twitter-x"></i></a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer