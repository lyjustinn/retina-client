import React from 'react';
import Layout from '../../components/layout/Layout';

interface LandingPageProps {

}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
    return (
        <Layout param="temp">
            <div>this is the landing page</div>
        </Layout>
    );
}
export default LandingPage;