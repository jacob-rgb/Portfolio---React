import { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataProviders';
import { toggleMenu, toggleNavbar, softScroll} from '../helpers/navbar/navbarHelpers';
import imagenLogo from '../../logo.png';
import imagenLogoLight from '../../assets/LogoLight.png';
import bombillaOn from '../../assets/bombillaOn.png';
import bombillaOff from '../../assets/bombillaOff.png';
import '../styles/Navbar.css';

export const Navbar = () => {
    const context:any = useContext(DataContext);
    const [ theme, setTheme ] = context.theme;

    useEffect(() => {
        document.addEventListener('scroll', toggleNavbar)
        return () => {
        document.removeEventListener('scroll', toggleNavbar)
        }
      }, [])

      const handleThemebtnClick = () => {
          if(theme === 'dark') {
            setTheme('light')
            localStorage.setItem('theme','light')
          } else {
            setTheme('dark');
            localStorage.setItem('theme','dark')
          }
      }
      
    return (
        <div className="navbar">
            <div className="logo">
                <button className="logoBtn fadeInTop">
                    <img src={theme === 'dark' ? imagenLogo : imagenLogoLight} alt="J.r.r DevSols" />
                </button>
            </div>
            <div className="links">
                <button id='themeBtn' type='button' onClick={handleThemebtnClick}><img src={theme === 'dark' ? bombillaOff : bombillaOn} alt="theme" /></button>
                <button type='button' onClick={softScroll} data-target="aboutS" style={{animationDelay:'.3s'}} className={`fadeInTop`}><span data-target="aboutS">01.</span>About</button>
                <button type='button' onClick={softScroll} data-target="experienceS" style={{animationDelay:'.5s'}} className={`fadeInTop`}><span data-target="experienceS">02.</span>Experience</button>
                <button type='button' onClick={softScroll} data-target="mainProjectS" style={{animationDelay:'.7s'}} className={`fadeInTop`}><span data-target="mainProjectS">03.</span>Work</button>
                <button type='button' onClick={softScroll} data-target="contactS" style={{animationDelay:'.9s'}} className={`fadeInTop`}><span data-target="contactS">04.</span>Contact</button>
                <a href='/assets/cv.pdf' target="_blank" style={{animationDelay:'1s'}} className="resumeBtn outlineBtn fadeInTop">Resume</a>
            </div>
            <div className="menu-btn">
                    < button type='button' className="dropdown-toggle" id="navbarDropdown" onClick={() => toggleMenu(theme)}>
                        <div className='menuBar1'></div>
                        <div className='menuBar2'></div>
                        <div className='menuBar3'></div>
                   </button>
            </div>
        </div>
    )
}
