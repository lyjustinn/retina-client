import React from 'react';
import Layout from '../../components/layout/Layout';
import { getUser } from '../../util/user/userService';

const LandingPage: React.FC = ({}) => {

    // const user = getUser();

    return (
        <Layout param="temp" user={null}>
            <div className="w-100 h-100 hero d-flex justify-content-center flex-column" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${process.env.REACT_APP_CDN_URL ?? ""}/hero.jpg')`}}>
                <h1 className="m-0 text-center w-100 retina-text-light">Retina</h1>
                <h4 className="m-0 text-center w-100 retina-text-light">Open Source Image Sharing Platform</h4>
            </div>
        </Layout>
    );
}
export default LandingPage;