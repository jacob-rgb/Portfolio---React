import { useState } from 'react';
import '../styles/components/works.css';
import { SingleWork } from './SingleWork';

interface Props {
    language?: string;
}

export const Works = ({language = 'en'}: Props) => {

    
    const [work, setWork] = useState('work1');

    return (
        <div className="row">
            <div className="col-2 animaTop">
                <div className="links">
                    <button className={`work ${ work === 'work1' && 'active'}`} onClick={() => setWork('work1')}>El Relator S.L</button>
                    <button className={`work ${ work === 'work2' && 'active'}`} onClick={() => setWork('work2')}>Freelance</button>
                    <button className={`work ${ work === 'work3' && 'active'}`} onClick={() => setWork('work3')}>Noddus</button>
                </div>
            </div>
            
            <div className="col-10 animaTop">
                < SingleWork work={work} showIf='work1' title='El Relator S.L' date='2018-2019' >
                      <p><i className='bx bx-caret-right'></i> { language === 'en' ? 'Implementation of analysis tools such as Google Analytics.' : 'Implementación de herramientas de análisis como Google Analytics.'} </p>
                      <p><i className='bx bx-caret-right'></i> { language === 'en' ? 'Write modern, performant, maintainable code for the client with the objective that the code is clear and easy to understand.' : 'Crear códigos modernos, optimizados y mantenibles para el cliente con el objetivo de que sea claro y fácil de entender.'} </p>
                      <p><i className='bx bx-caret-right'></i> { language === 'en'? 'Design, development and deployment of the website.' : 'Diseño, desarrollo y despliegue del sitio web'}</p>
                      <p><i className='bx bx-caret-right'></i> { language === 'en'? 'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Bootstrap, Material UI, Styled Components, Google Analytics, Angular, React,  and Netlify.' : 'Trabajar con variedad de lenguajes, plataformas y frameworks como Javascript, Typescript, Bootstrap, Material UI, Styled Components, Google Analytics, Angular, React y Netlify, entre otras muchas.'}</p>
                </SingleWork>

                < SingleWork work={work} showIf='work2' title='Freelance' date='2019-2021' >
                      <p> <i className='bx bx-caret-right'></i> { language === 'en' ? 'Write modern, performant, maintainable code for a diverse array of client and internal projects.' : 'Crear códigos modernos, optimizados y mantenibles para un grupo diverso de clientes.'}</p>
                      <p> <i className='bx bx-caret-right'></i> { language === 'en' ? 'I have worked for different clients, specialized in different areas. For example, psychology, art world, restaurants and digital media.' : 'He trabajado con diferentes clientes especializados en diferentes áreas. Como por ejempo psicología, el mundo del arte, restaurantes y medios digitales'}</p>
                      <p> <i className='bx bx-caret-right'></i> { language === 'en' ? 'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Bootstrap, Material UI, Google analytics, Firebase, Node.js (Express & Nest.js), MongoDB, MySQL, Angular, React, Netlify and Heroku.' : 'Trabajar con variedad de lenguajes, plataformas y frameworks como Javascript, Typescript, Bootstrap, Tailwind, Material UI, Google Analytics, Firebase, NodeJs (Express & Nest.js), MongoDB, MySQL, Angular, React, Netlify y Heroku.'}</p>
                      <p> <i className='bx bx-caret-right'></i> { language === ' en' ? 'Database design, development and deployment using technologies such as MySqlServer, Mongo Atlas, Clever Cloud, etc.': 'Diseño, desarrollo y despliegue de bases de datos usando tecnologías como MySQLServer, Mongo Atlas, Clever Cloud, etc.'} </p>
                </SingleWork>

                < SingleWork work={work} showIf='work3' title='Noddus' date='2021-Present' >
                      <p> <i className='bx bx-caret-right'></i> { language === 'en' ? 'Write modern, performant, maintainable code for a diverse array of client and internal projects.' : 'Crear códigos modernos, optimizados y mantenibles para diversos clientes.'}</p>
                      <p> <i className='bx bx-caret-right'></i> { language === 'en' ? 'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Angular, Vue, NodeJs, Express and Nest.js' : 'Trabajar con variedad de lenguajes, plataformas y frameworks diferentes como Javascript, Typescript, Gatsby, React, Angular, Vue, NodeJs, Express and Nest.js.'} </p>
                      <p> <i className='bx bx-caret-right'></i> { language === 'en' ? 'Maintain contact with the design team to develop different projects in the most optimal way.' : 'Mantener el contacto con los diseñadores para desarrollar proyectos lo más optimizados posible.'}</p>
                      <p> <i className='bx bx-caret-right'></i> { language === 'en' ? 'National and international projects for different media such as El Español, El Mundo, AS, Prensa Ibérica ...' : 'Ptoyectos nacionales e internacionales para diferentes medios como El Español, El Mundo, ABC, AS...'}</p>
                </SingleWork>
            </div>
        </div>
    )
}
