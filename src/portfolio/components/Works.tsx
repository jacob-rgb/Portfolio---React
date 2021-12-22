import { useState } from 'react';
import '../styles/components/works.css';
import { SingleWork } from './SingleWork';

export const Works = () => {

    
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
                      <p><i className='bx bx-caret-right'></i> Implementation of analysis tools such as Google Analytics. </p>
                      <p><i className='bx bx-caret-right'></i> Write modern, performant, maintainable code for the client with the objective that the code is clear and easy to understand. </p>
                      <p><i className='bx bx-caret-right'></i> Design, development and deployment of the website.</p>
                      <p><i className='bx bx-caret-right'></i> Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Bootstrap, Material UI, Styled Components, Google Analytics, Angular, React,  and Netlify.</p>
                </SingleWork>

                < SingleWork work={work} showIf='work2' title='Freelance' date='2019-2021' >
                      <p> <i className='bx bx-caret-right'></i> Write modern, performant, maintainable code for a diverse array of client and internal projects.</p>
                      <p> <i className='bx bx-caret-right'></i> I have worked for different clients, specialized in different areas. For example, psychology, art world, restaurants and digital media.</p>
                      <p> <i className='bx bx-caret-right'></i> Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Bootstrap, Material UI, Google analytics, Firebase, Node.js (Express & Nest.js), MongoDB, MySQL, Angular, React, Netlify and Heroku.</p>
                      <p> <i className='bx bx-caret-right'></i> Database design, development and deployment using technologies such as MySqlServer, Mongo Atlas, Clever Cloud, etc.</p>
                </SingleWork>

                < SingleWork work={work} showIf='work3' title='El Relator S.L' date='2021-Present' >
                      <p> <i className='bx bx-caret-right'></i> Write modern, performant, maintainable code for a diverse array of client and internal projects.</p>
                      <p> <i className='bx bx-caret-right'></i> Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Angular, Vue, NodeJs, Express and Nest.js </p>
                      <p> <i className='bx bx-caret-right'></i> Maintain contact with the design team to develop different projects in the most optimal way.</p>
                      <p> <i className='bx bx-caret-right'></i> National and international projects for different media such as El Español, El Mundo, AS, Prensa Ibérica ...</p>
                </SingleWork>
            </div>
        </div>
    )
}
