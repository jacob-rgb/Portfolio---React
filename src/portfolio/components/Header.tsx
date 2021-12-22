import { softScroll} from '../helpers/navbar/navbarHelpers';
import Particles from "react-tsparticles";

interface Props {
  language?: string;
}

export const Header = ({language = 'en'}: Props) => {

    const particlesInit = (main:any) => {
      
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container:any) => {
      
      };

    return (
    <section className="header">
     <Particles
         style={{position:'relative', zIndex:'-1'}}
           id="tsparticles"
           init={particlesInit}
           loaded={particlesLoaded}
           options={{
             background: {
               color: {
                 value: "transparent",
               },
             },
             fpsLimit: 60,
             interactivity: {
               events: {
                 onClick: {
                   enable: false,
                   mode: "push",
                 },
                 onHover: {
                   enable: true,
                   mode: "repulse",
                 },
                 resize: true,
               },
               modes: {
                 bubble: {
                   distance: 400,
                   duration: 2,
                   opacity: 0.8,
                   size: 40,
                 },
                 push: {
                   quantity: 2,
                 },
                 repulse: {
                   distance: 150,
                   duration: 0.4,
                 },
               },
             },
             particles: {
               color: {
                 value: "#ffffff",
               },
               links: {
                 color: "#ffffff",
                 distance: 150,
                 enable: true,
                 opacity: 0.3,
                 width: 1,
               },
               collisions: {
                 enable: true,
               },
               move: {
                 direction: "none",
                 enable: true,
                 outMode: "bounce",
                 random: false,
                 speed: 1,
                 straight: false,
               },
               number: {
                 density: {
                   enable: true,
                   value_area: 1500,
                 },
                 value: 80,
               },
               opacity: {
                 value: 0.5,
               },
               shape: {
                 type: "square",
               },
               size: {
                 random: true,
                 value: 5,
               },
             },
             detectRetina: true,
           }}
    />     
        <span style={{animationDelay:"1.1s"}} className="animaTop mono fadeInBot">{ language === 'en' ? 'Hi, my name is' : 'Hola, mi nombre es'}</span>
        <h4 style={{animationDelay:"1.3s"}} className="animaTop fadeInBot">Jacobo Ramírez.</h4>
        <h4 style={{animationDelay:"1.5s"}} className="animaTop fadeInBot">{ language === 'en' ? 'I build things for the web.' : 'Construyo experiencias web.'}</h4>
        <p style={{animationDelay:"1.7s"}} className="animaTop fadeInBot">{ language === 'en' ? 'I´m a fullstack developer with more than two years of experience building (and occasionally designin) exceptional digital experiences.': 'Soy un fullstack developer con más de dos años de experiencia desarrollando (y en ocasiones diseñando) experiencias digitales excepcionales.'} </p>
        <button style={{animationDelay:"1.8s"}} className="animaTop outlineBtn checkBtn fadeInBot" data-target="mainProjectS" onClick={softScroll}>{ language === 'en' ? 'Check My Works' : 'Ojea Mis Trabajos'}</button>
    </section>
    )
}
