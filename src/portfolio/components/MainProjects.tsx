import { SingleMainProject } from "./SingleMainProject";
import { mainProjects } from '../data/projects';
import '../styles/components/mainProjects.css';

interface Props {
  language?: string;
}

export const MainProjects = ({language = 'en'}: Props) => {
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
                     <p>{ language === 'en' ? project.description : project.descriptionEs }</p>
                   </SingleMainProject>
                 ))
             }
        </div>
    )
}
