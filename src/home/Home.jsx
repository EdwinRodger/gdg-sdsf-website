import React from 'react';
import hero from '../assets/hero.png';
import red from '../assets/red.png';
import blue from '../assets/blue.png';

const Home = () => {
    return (
        <>
            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={hero} className="d-block mx-lg-auto img-fluid" alt="Hero" height="488" width="488" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Hello, Programmers!</h1>
                        <p className="lead">Google Developer Groups are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="https://gdg.community.dev/gdg-on-campus-school-of-data-science-and-forecasting-indore-india/" target='_blank'>
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Know More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="container" />
            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">What we do!</h1>
                        <p className="lead">Google Developer Groups DAVV is a technical club by the students of School of Data Science and Forecasting, DAVV. A club that lets students explore the latest advancements in computer technology by creating a community of "Tech Minded" students. We also provide opportunities to students to grow and learn about a range of technical topics and gain new skills.</p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={blue} className="d-block mx-lg-auto img-fluid" alt="Hero" height="488" width="488" loading="lazy" />
                    </div>
                </div>
            </div>
            <hr className="container" />
            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={red} className="d-block mx-lg-auto img-fluid" alt="Hero" height="488" width="488" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">What we have done!</h1>
                        <p className="lead">As Google Developer Groups, we’ve hosted meetups, hands-on workshops, and hackathons to explore technologies like AI, cloud, and mobile development. From networking events to collaborative coding sessions, we’ve connected developers, shared knowledge, and built impactful solutions, fostering innovation and growth within our community.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;