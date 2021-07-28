import React from 'react';
import NavHeader from '../navbar/NavHeader';
import Footer from '../footer/Footer';

import { User } from '../../types/userTypes';

interface LayoutProps {
    children: JSX.Element
    param: string | null
    user : User | null
}

const Layout: React.FC<LayoutProps> = ({children, param}) => {
    return (
        <div className="d-flex flex-column h-100">
            <NavHeader/>
            <div className="flex-grow-1">
                {children}
            </div>
            <Footer/>
        </div>
    );
}
export default Layout;