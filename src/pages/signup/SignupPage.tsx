import React from 'react';
import Layout from '../../components/layout/Layout';
import Signup from '../../components/signup/Signup';

const SignupPage: React.FC = () => {
    return(
        <Layout param="" user={null}>
            <Signup />
        </Layout>
    );
}
export default SignupPage;