import { SingleMainProject } from "./SingleMainProject";
import { mainProjects } from '../data/projects';
import '../styles/components/mainProjects.css';

export const MainProjects = () => {
    return (
        <div>
             {
                 mainProjects.map((project) => (
                    < SingleMainProject 
                       key={project.title}
                       img={project.img}
                       title={project.title}
                       tech={project.tech}
                       gitUrl={project.gitUrl}
                       demoUrl={project.demoUrl}
                       position={project.position}
                       >
                     <p>{ project.description }</p>
                   </SingleMainProject>
                 ))
             }
        </div>
    )
}
