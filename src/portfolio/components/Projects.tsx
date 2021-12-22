import { Project } from "./Project";
import { projects } from '../data/projects';
import '../styles/components/projects.css';
import { Dispatch, SetStateAction, useState } from "react";
import { mostrarElements } from "../helpers/portfolioHelpers";

export const Projects = () => {

    const [projectsLimit, setProjectsLimit]:[number, Dispatch<SetStateAction<number>>] = useState(6)

    const handleClick = (): void => {
        if(projectsLimit > 6) setProjectsLimit(6)
        if(projectsLimit <= 6) {
            setProjectsLimit(12);  
            setTimeout(() => {
                mostrarElements();
            }, 0);
            document.addEventListener('scroll', mostrarElements);
        } 
    }

    return (
        <>
        <div className="projects-container">
            {
                projects.slice(0, projectsLimit).map( ({title, description, tech, gitUrl, demoUrl}, index) => (
                    <Project 
                       key={ title }
                       title={ title }
                       techs={ tech }
                       gitUrl={ gitUrl }
                       demoUrl={ demoUrl }
                       delayAnimation={0.2 * index}
                      >
                          <p>{ description }</p>
                   </Project>
                ))
            }
        </div>
        <div className="buttonShow">
            <button onClick={handleClick}>{ projectsLimit <=6 ? 'Show More' : 'Show Less'}</button>
        </div>
        </>
    )
}
