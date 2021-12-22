import fotoPerfil from '../../assets/fotoperfil2.png';

interface Props {
    language?: string;
}

export const About = ({language = 'en'}: Props) => {
    return (
        <div className="row animaTop">
        <div className="col-8">
            <p className="fadeInBot">
                {
                    language === 'en' ? 'Hello! My name is Jacobo Ramírez and i enjoy creating things that live on the internet. My interest in web development started back in 2017 when i decided to try building a simple website for a business.'
                    : 'Hola, Mi nombre es Jacobo Ramírez y me encanta crear aplicaciones multiplataforma. Mi interés en el desarrollo web comenzó en 2017 cuando decidí montar un sitio web para un negocio.'
                }
            </p>
            <p className="fadeInBot">
                { language === 'en' ? "It was then when I decided to study web development.Nowadays i' ve had the priviliege of working at" : "Fue entonces cuando decidí estudiar desarrollo de aplicaciones multiplataforma. Hoy en día he tenido el privilegio de trabajar con "}
                 <span className="text-green "> {language === 'en' ? 'an advertising agency, a start-up and a media-web agency' : 'una agencia de publicidad, una start-up y una agencia de media-web'} </span>
                { language === 'en' ? 'My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.' : 'Mi principal dedicacíon a día de hoy es crear aplicaciones tanto accesibles como optimizadas y experiencias digitales para una variedad de clientes.'}
            </p>
            <p className="fadeInBot">{ language === 'en' ? 'Here are a few technologies I’ve been working with recently : ' : 'Estas son algunas de las tecnologías que estoy usando para trabajar : '}</p>
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
