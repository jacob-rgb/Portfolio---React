import { useContext, useEffect, useState } from "react";
import { Navbar, SideBars, About, Header, Works, MainProjects, Projects, Loading, Footer} from './components/index'
import { DataContext } from "./context/DataProviders";
import { mostrarElements } from './helpers/portfolioHelpers';
import './styles/style.css';


export const Portfolio = () => {

    const context:any = useContext(DataContext);
    const [ theme, ] = context.theme;
    const [ language, ] = context.language;

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        document.title='Jacobo Ramírez';
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        
        document.addEventListener('scroll', mostrarElements);
        return () => {
             document.removeEventListener('scroll', mostrarElements)
        }
    }, [])

    return (
        <>
            {
                loading && 
                <div className={`main ${theme === 'light' && 'light'}`}>
                    <Loading />
                </div>
            }
            {
                !loading && 
                <div className={`main ${theme === 'light' && 'light'}`}>
                < Navbar />
                < SideBars />
                <div className="content">
                    < Header language={language} />
                    <section className="about animaTop" id="aboutS">
                        <h2 className="title"><span>01. </span>{ language === 'en' ? 'About me' : 'Sobre mi'}</h2>
                        < About language={language} />
                    </section>
                    <section className="experience" id="experienceS">
                        <div className="container">
                           <h2 className="title animaTop"><span>02. </span>{ language === 'en' ? "Where i've Worked" : 'Donde He Trabajado'}</h2>
                           < Works language={language} />
                        </div>
                    </section>
                    <section className="mainProject" id="mainProjectS">
                        <div className="container">
                           <h2 className="title animaTop"><span>03. </span>Some Things I've Built</h2>
                           < MainProjects />
                        </div>
                    </section>
    
                    <section className="projects">
                        <div className="container">
                           <h2 className="subtitle animaTop">Other Noteworthy Projects</h2>
                            <Projects />
                        </div>
                    </section>
                    <section className="contact" id="contactS">
                        <span className={`pretitle mono animaTop`}>04. What's Next ?</span>
                        <h2 className={`animaTop`}>Get In Touch</h2>
                        <p className={`animaTop`}>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                        <a href="mailto:jacoboramirezrivera6@gmail.com" className="outlineBtn mono">Say Hello</a>
                    </section>
                </div>
                < Footer />
            </div>
            }
        </>
    )
}

export default Portfolio;
