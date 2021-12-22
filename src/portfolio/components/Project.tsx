import { ReactElement, useCallback } from "react"

interface Props {
    delayAnimation: number;
    title: string;
    techs: string;
    gitUrl: string;
    demoUrl: string;
    children: ReactElement | ReactElement[]
}

export const Project = ({title, techs, gitUrl, demoUrl, children, delayAnimation}: Props) => {

    const width = useCallback(
        () => {
           return window.innerWidth
        },
        [],
    )

    return (
     <div style={{animationDelay:`${width() < 700 || delayAnimation >= 1.2 ? "0s" : `${delayAnimation}s`}`}} className="animaTop">
        <div className="project-card">
                <div className="project-header">
                  <div className="file">
                     <i className='bx bx-folder'></i>
                  </div>
                  <div className="buttons">
                      <a href={gitUrl} target="_blank" rel="noreferrer"><i className='bx bxl-github'></i></a>
                      <a href={demoUrl} target="_blank" rel="noreferrer"><i className='bx bx-link-external'></i></a>
                  </div>
                </div>
                <div className="projectTitle">
                    <h3>{title}</h3>
                </div>
                <div className="description">
                    {
                        children
                    }
                </div>
                <div className="techs">
                    <p>{ techs } </p>
                </div>
        </div>
    </div>
    )
}
