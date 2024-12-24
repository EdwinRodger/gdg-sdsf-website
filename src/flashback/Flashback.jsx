import React from 'react'


const Flashback = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>TechLaunchPad, 17th Feb 2023</h1>
            <div id="autoPlayCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.imgur.com/qbh3dsb.jpeg" className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/nGAN8Vw.jpeg" className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/0GEBdRX.jpeg" className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/sWIaH4K.jpeg" className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/tI2wYEw.jpeg" className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/BoKyFd9.jpeg" className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/3t2CREa.jpeg" className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/Co5oF4t.jpeg" className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/Osath3u.jpeg" className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.imgur.com/rt4G0XF.jpeg" className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#autoPlayCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#autoPlayCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Flashback
