import ProjectContainer from "../components/ProjectContainer";
import { info } from "../info/Info";

function Projects() {
    return (
        <div className="flex flex-col md:mt-10">
            <div>
                <p className="flex place-content-center text-sm lg:text-base font-light">View my work</p>
                <h1 className="flex text-4xl lg:text-5xl place-content-center mb-8 font-extrabold">Projects</h1>
            </div>
            <ul>{info.portfolio.map((project, index) => (
                <li key={index}>
                    <ProjectContainer image={project.image} live={project.live} source={project.source} title={project.title} />
                </li>
            ))}
            </ul>

        </div>
    );
}

export default Projects;