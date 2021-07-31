import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer className="retina-bg-dark py-3 px-4 retina-text-light d-flex justify-content-between">
            <span>Built by <a className="retina-text-blue text-decoration-none" href="https://github.com/lyjustinn">Justin Ly</a></span>
            <span>Photo taken by <a className="retina-text-blue text-decoration-none" href="https://www.pexels.com/photo/architectural-photography-of-city-buildings-2341282/">Aleksander Parasic</a></span>
        </footer>
    );
}
export default Footer;