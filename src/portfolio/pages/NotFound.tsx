import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer, Navbar, SideBars } from '../components';
import '../styles/style.css';

export const NotFound = () => {
    useEffect(() => {
        document.title = 'Not Found | Jacobo Ramírez'
        return () => {
           
        }
    }, [])
    return (
        <div className='main'>
            < Navbar />
            < SideBars />
            <div className="notFound">
                    <h2>404</h2>
                    <h3>Page Not Found</h3>
                    <Link className='outlineBtn mono button' to={'/'}>Go Home</Link>
            </div>
            < Footer />
        </div>
    )
}
