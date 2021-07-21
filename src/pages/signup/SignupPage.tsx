import React from 'react';
import Layout from '../../components/layout/Layout';
import Signup from '../../components/signup/Signup';

interface SignupPageProps {

}

const SignupPage: React.FC<SignupPageProps> = ({}) => {
    return(
        <Layout param="" user={null}>
            <Signup/>
        </Layout>
    );
}
export default SignupPage;