import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import { User } from '../../types/retinaTypes';

interface LayoutProps {
    children: JSX.Element
    param: string
    user : User
}

const Layout: React.FC<LayoutProps> = ({children, param}) => {
    return (
        <div className="d-flex flex-column justify-content-center h-100">
            <Navbar/>
            <div className="flex-grow-1">
                {children}
            </div>
            <Footer/>
        </div>
    );
}
export default Layout;