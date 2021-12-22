import fotoPerfil from '../../assets/fotoperfil2.png';


export const About = () => {
    return (
        <div className="row animaTop">
        <div className="col-8">
            <p className="fadeInBot">Hello! My name is Jacobo Ramírez and i enjoy creating things that live on the internet. My interest in web development started back in 2017 when i decided to try building a simple website for a business.</p>
            <p className="fadeInBot">It was then when I decided to study web development.
                Nowadays i' ve had the priviliege of working at <span className="text-green "> an advertising agency, a start-up and a media-web agency </span>
                My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <p className="fadeInBot">Here are a few technologies I’ve been working with recently:</p>
            <ul className="skills-box">
                <li><span><i className='bx bx-caret-right'></i></span> Javascript (ES6+)</li>
                <li><span><i className='bx bx-caret-right'></i></span> TypeScript</li>
                <li><span><i className='bx bx-caret-right'></i></span> React</li>
                <li><span><i className='bx bx-caret-right'></i></span> React Native</li>
                <li><span><i className='bx bx-caret-right'></i></span> Angular</li>
                <li><span><i className='bx bx-caret-right'></i></span> Ionic</li>
                <li><span><i className='bx bx-caret-right'></i></span> Vue & Vuex</li>
                <li><span><i className='bx bx-caret-right'></i></span> Node.js</li>
                <li><span><i className='bx bx-caret-right'></i></span> Nest.js</li>
                <li><span><i className='bx bx-caret-right'></i></span> Express</li>
                <li><span><i className='bx bx-caret-right'></i></span> Web sockets</li>
                <li><span><i className='bx bx-caret-right'></i></span> Webpack</li>
                <li><span><i className='bx bx-caret-right'></i></span> HTML & CSS</li>
                <li><span><i className='bx bx-caret-right'></i></span> Git & Github</li>
                <li><span><i className='bx bx-caret-right'></i></span> mySQL, Postgres</li>
                <li><span><i className='bx bx-caret-right'></i></span> MongoDB</li>
            </ul>
        </div>
        <div className="col-4">
            <div className="img-cont">
              <img src={fotoPerfil} alt="Foto Perfil" />
            </div>
        </div>
    </div>
    )
}
