import React, { useRef } from 'react';
import hero from '../assets/hero.png';
import red from '../assets/red.png';
import blue from '../assets/blue.png';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    useGSAP(() => {
        // Hero section animation
        const heroTl = gsap.timeline();
        heroTl.from(".hero-image", {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
        heroTl.from(".hero-title", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.8");
        heroTl.from(".hero-text", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.6");
        heroTl.from(".hero-button", {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out"
        }, "-=0.4");

        // Section animations with ScrollTrigger
        gsap.from(".section1-image", {
            scrollTrigger: {
                trigger: section1Ref.current,
                start: "top 50%",
                toggleActions: "play none none none"
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from(".section1-content", {
            scrollTrigger: {
                trigger: section1Ref.current,
                start: "top 50%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2
        });

        gsap.from(".section2-image", {
            scrollTrigger: {
                trigger: section2Ref.current,
                start: "top 50%",
                toggleActions: "play none none none"
            },
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from(".section2-content", {
            scrollTrigger: {
                trigger: section2Ref.current,
                start: "top 50%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2
        });

        // Parallax effect
        // gsap.to(".parallax-bg", {
        //     scrollTrigger: {
        //         trigger: heroRef.current,
        //         start: "top top",
        //         end: "bottom top",
        //         scrub: true
        //     },
        //     y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        //     ease: "none"
        // });
    }, []);

    return (
        <>
            {/* Hero Section with Parallax */}
            <div className="position-relative overflow-hidden" ref={heroRef}>
                <div className="parallax-bg" data-speed="0.2"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle at 10% 20%, rgba(66, 133, 244, 0.05) 0%, rgba(234, 67, 53, 0.05) 90%)',
                        zIndex: -1
                    }}></div>
                <div className="container col-xxl-8">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5" style={{ minHeight: "90vh" }}>
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={hero} className="d-block mx-lg-auto img-fluid hero-image" alt="Hero" height="488" width="488" loading="lazy"
                                style={{
                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
                                    transform: 'perspective(1000px) rotateY(-5deg)',
                                    transition: 'transform 0.5s ease',
                                }}
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        rotationY: '5deg',
                                        duration: 0.5,
                                        ease: 'power2.out'
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        rotationY: '-5deg',
                                        duration: 0.5,
                                        ease: 'power2.out'
                                    });
                                }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold text-body-emphasis lh-1 mb-4 hero-title"
                                style={{
                                    background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundSize: '300% 100%',
                                    animation: 'gradient 6s ease infinite'
                                }}>
                                Hello, Programmers!
                            </h1>
                            <p className="lead hero-text" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                Google Developer Groups are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                                <a href="https://gdg.community.dev/gdg-on-campus-school-of-data-science-and-forecasting-indore-india/" target='_blank' className="hero-button">
                                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2"
                                        style={{
                                            background: 'linear-gradient(45deg, #4285F4, #0F9D58)',
                                            border: 'none',
                                            borderRadius: '30px',
                                            padding: '12px 30px',
                                            boxShadow: '0 4px 15px rgba(66, 133, 244, 0.3)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            gsap.to(e.target, {
                                                scale: 1.05,
                                                boxShadow: '0 6px 20px rgba(66, 133, 244, 0.4)',
                                                duration: 0.3
                                            });
                                        }}
                                        onMouseLeave={(e) => {
                                            gsap.to(e.target, {
                                                scale: 1,
                                                boxShadow: '0 4px 15px rgba(66, 133, 244, 0.3)',
                                                duration: 0.3
                                            });
                                        }}>
                                        Know More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <hr className="my-0" style={{ height: '2px', background: 'linear-gradient(to right, transparent, rgba(66, 133, 244, 0.5), transparent)' }} />
            </div>

            {/* What we do section */}
            <div className="position-relative overflow-hidden" ref={section1Ref}>
                <div className="parallax-bg" data-speed="0.1"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle at 90% 10%, rgba(52, 168, 83, 0.05) 0%, rgba(251, 188, 5, 0.05) 90%)',
                        zIndex: -1
                    }}></div>
                <div className="container col-xxl-8">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5" style={{ minHeight: "80vh" }}>
                        <div className="col-lg-6 section1-content">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-4"
                                style={{
                                    color: '#4285F4',
                                    position: 'relative'
                                }}>
                                What we do!
                                <span style={{
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '0',
                                    width: '80px',
                                    height: '4px',
                                    background: '#4285F4',
                                    borderRadius: '2px'
                                }}></span>
                            </h1>
                            <p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                Google Developer Groups DAVV is a technical club by the students of School of Data Science and Forecasting, DAVV. A club that lets students explore the latest advancements in computer technology by creating a community of "Tech Minded" students. We also provide opportunities to students to grow and learn about a range of technical topics and gain new skills.
                            </p>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={blue} className="d-block mx-lg-auto img-fluid section1-image" alt="What we do" height="488" width="488" loading="lazy"
                                style={{
                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
                                    borderRadius: '20px',
                                    transform: 'perspective(1000px) rotateY(5deg)',
                                    transition: 'transform 0.5s ease'
                                }}
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        rotationY: '-5deg',
                                        duration: 0.5,
                                        ease: 'power2.out'
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        rotationY: '5deg',
                                        duration: 0.5,
                                        ease: 'power2.out'
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <hr className="my-0" style={{ height: '2px', background: 'linear-gradient(to right, transparent, rgba(234, 67, 53, 0.5), transparent)' }} />
            </div>

            {/* What we have done section */}
            <div className="position-relative overflow-hidden" ref={section2Ref}>
                <div className="parallax-bg" data-speed="0.15"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle at 10% 90%, rgba(234, 67, 53, 0.05) 0%, rgba(251, 188, 5, 0.05) 90%)',
                        zIndex: -1
                    }}></div>
                <div className="container col-xxl-8">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5" style={{ minHeight: "80vh" }}>
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={red} className="d-block mx-lg-auto img-fluid section2-image" alt="What we have done" height="488" width="488" loading="lazy"
                                style={{
                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
                                    borderRadius: '20px',
                                    transform: 'perspective(1000px) rotateY(-5deg)',
                                    transition: 'transform 0.5s ease'
                                }}
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        rotationY: '5deg',
                                        duration: 0.5,
                                        ease: 'power2.out'
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        rotationY: '-5deg',
                                        duration: 0.5,
                                        ease: 'power2.out'
                                    });
                                }}
                            />
                        </div>
                        <div className="col-lg-6 section2-content">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-4"
                                style={{
                                    color: '#EA4335',
                                    position: 'relative'
                                }}>
                                What we have done!
                                <span style={{
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '0',
                                    width: '80px',
                                    height: '4px',
                                    background: '#EA4335',
                                    borderRadius: '2px'
                                }}></span>
                            </h1>
                            <p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                As Google Developer Groups, we've hosted meetups, hands-on workshops, and hackathons to explore technologies like AI, cloud, and mobile development. From networking events to collaborative coding sessions, we've connected developers, shared knowledge, and built impactful solutions, fostering innovation and growth within our community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add keyframes for gradient animation */}
            <style jsx="true">{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </>
    );
}

export default Home;