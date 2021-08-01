import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="retina-bg-dark mt-4 py-3 px-4 retina-text-light d-flex justify-content-between">
            <span>Built by <a className="retina-text-blue text-decoration-none" href="https://github.com/lyjustinn">Justin Ly</a></span>
            <span>Photo taken by <a className="retina-text-blue text-decoration-none" href="https://www.pexels.com/photo/architectural-photography-of-city-buildings-2341282/">Aleksander Parasic</a></span>
        </footer>
    );
}
export default Footer;