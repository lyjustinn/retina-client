import React from 'react';
import Layout from '../../components/layout/Layout';
import { getUser } from '../../util/user/userService';

const LandingPage: React.FC = ({}) => {

    const user = getUser();

    return (
        <Layout param="temp" user={user}>
            <div>this is the landing page</div>
        </Layout>
    );
}
export default LandingPage;