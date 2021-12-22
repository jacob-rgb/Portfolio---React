import { ReactElement } from "react";


interface Props {
    img: string,
    title: string,
    tech: string,
    position?: "right" | "left",
    gitUrl: string,
    demoUrl: string,
    children: ReactElement | ReactElement[]
}

export const SingleMainProject = ({img, title, tech, position = "left", gitUrl, demoUrl, children }: Props) => {
    return (
        <div className={`main-card animaTop ${position === "right" && "reverseCard"}`}>
            <div className="main-card-cont">
                <div className="image">
                    <a href="2we">
                      <img src={img} alt={title} />
                    </a>
                </div>
                <div className="info">
                        <div className="infoHeader">
                            <span>Featured Project</span>
                            <span className="infoTitle">{ title }</span>
                        </div>
                        <div className="description">
                            { children }
                        </div>
                        <div className="tech">
                           { tech }
                        </div>
                        <div className="buttons">
                            <a href={gitUrl} target="_blank" rel="noreferrer" ><i className='bx bxl-github'></i></a>
                            <a href={demoUrl} target="_blank" rel="noreferrer" ><i className='bx bx-link-external'></i></a>
                        </div>
                </div>
            </div>
        </div>
    )
}
