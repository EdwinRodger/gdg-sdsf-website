import React from 'react'
import gdg_logo from './assets/gdg_logo.png'

const Footer = () => {
    return (
        <>
            <div className='bg-body-tertiary'>
                <div class="container">
                    <footer class="d-flex flex-wrap justify-content-between align-items-center py-4">
                        <div class="col-md-4 d-flex align-items-center">
                            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1 d-none d-md-block">
                                <img src={gdg_logo} alt="GDG Logo" height="32" />
                            </a>
                            <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Google Developer Groups On Campus School of Data Science and Forecasting</span>
                        </div>

                        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li class="ms-3"><a class="text-body-secondary" href="https://instagram.com/gdgsdsf"><i class="bi bi-instagram"></i></a></li>
                            <li class="ms-3"><a class="text-body-secondary" href="https://www.facebook.com/profile.php?id=100084530138056"><i class="bi bi-facebook"></i></a></li>
                            <li class="ms-3"><a class="text-body-secondary" href="https://x.com/GdgDavv"><i class="bi bi-twitter-x"></i></a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer