import '../styles/components/sideBars.css';

export const SideBars = () => {
    return (
        <>
            <div style={{animationDelay:"1.9s"}} className="sideBars side-left fadeInBot">
                <ul>
                    <li><a rel='noreferrer' href="https://www.facebook.com/" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                    <li><a rel='noreferrer' href="https://api.whatsapp.com/send?phone=34666129008" target="_blank"><i className='bx bxl-whatsapp' ></i></a></li>
                    <li><a rel='noreferrer' href="mailto:jacoboramirezrivera6@gmail.com" target="_blank"><i className='bx bxl-gmail' ></i></a></li>
                    <li><a rel='noreferrer' href="https://github.com/jacob-rgb" target="_blank"><i className='bx bxl-github'></i></a></li>
                    <li><a rel='noreferrer' href="https://www.linkedin.com/in/jacobo-ram%C3%ADrez-rivera-1a6b691b5/" target="_blank"><i className='bx bxl-linkedin' ></i></a></li>
                </ul>
            </div>
            <div style={{animationDelay:"2s"}} className="sideBars side-right fadeInBot">
                <div className="email mono">
                    <a href="mailto:jacoboramirezrivera6@gmail.com">jacoboramirezrivera6@gmail.com</a>
                </div>
            </div>
        </>
    )
}
