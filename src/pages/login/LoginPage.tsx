import React from 'react';
import Layout from '../../components/layout/Layout';
import Login from '../../components/login/Login';

interface LoginPageProps {

}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
    return (
    <Layout param="" user={null}>
        <Login/>
    </Layout>);
}
export default LoginPage;