import React, { useState, useEffect } from "react";
import ProjectContainer from "../components/ProjectContainer";
import { info } from "../info/Info";

function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(1); // Number of projects initially visible
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrolling) {
                setScrolling(true);
                // Determine if the user has scrolled to the bottom
                if (
                    window.innerHeight + window.scrollY >=
                    document.body.offsetHeight - 40
                ) {
                    // Load more projects when the user is near the bottom
                    setVisibleProjects((prevVisibleProjects) =>
                        Math.min(prevVisibleProjects + 1, info.portfolio.length)
                    );
                }
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolling]);

    return (
        <div className="flex flex-col md:mt-10">
            <div className="animate-moveInDown">
                <p className="flex place-content-center text-sm lg:text-base font-light">
                    View my work
                </p>
                <h1 className="flex text-4xl lg:text-5xl place-content-center mb-8 font-extrabold">
                    Projects
                </h1>
            </div>
            <ul>
                {info.portfolio.slice(0, visibleProjects).map((project, index) => (
                    <li key={index}>
                        <ProjectContainer
                            image={project.image}
                            live={project.live}
                            source={project.source}
                            title={project.title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;