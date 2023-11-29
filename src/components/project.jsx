import React from "react";
import trade from "../assets/trade.mp4";
import swapnshop from "../assets/swapnshop.mp4";
import hotel from "../assets/hotel.mp4";
import medigo from "../assets/medigo.mp4";
import elearning from "../assets/E-learning.mp4"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../css/project.css";

const Project = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, delay: 7000 }, [
        Autoplay(),
    ]);

    const projects = [
        {
            title: "SwapNShop : Second Hand Products Market",
            link: "https://github.com/Dhruv100404/Swap-N-Shop",
            videoSrc: swapnshop,
        },
        {
            title: "Hotel Management Services",
            link: "https://github.com/Dhruv100404/Hotel_Management_Services",
            videoSrc: hotel,
        },
        {
            title: "Medigo: Book Appointment",
            link: "https://github.com/Dhruv100404/duhacks2",
            videoSrc: medigo,
        },
        {
            title: "Trade-Easy",
            link: "https://github.com/Dhruv100404/duhacks2",
            videoSrc: trade,
        },
        {
            title: "E-Learning Platform",
            link: "https://github.com/Dhruv100404/E-Learning",
            videoSrc: elearning,
        },
    ];

    return (
        <div className="cont">
        <section id="project">
        <h2 className="section-title" >Some things 
        I've built with expertise and a pinch of magical ingredients. </h2>
        <br />
            <h2 className="section-subtitle">Projects</h2>
            <div className="project-container">
                <div className="embla" ref={emblaRef}>
                    <div className="container embla__container">
                        {projects.map((project, index) => (
                            <div className="embla__slide" key={index}>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <h3 className="project_name">{project.title}</h3>
                                    <video
                                        className="embla__video" // Added a new class for styling
                                        autoPlay={true}
                                        loop={true}
                                        muted={true}
                                        width="100%" // Set width to fill the container
                                        height="auto" // Maintain aspect ratio
                                    >
                                        <source src={project.videoSrc} type="video/mp4" />
                                    </video>
                                </a>
                                {/* <p>{project.description}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="git_btn">
                <a
                    href="https://github.com/Dhruv100404"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit on Github
                </a>
            </div>
        </section>
        </div>
    );
}

    export default Project;
