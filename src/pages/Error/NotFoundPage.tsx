import React from 'react';
import Layout from '../../components/layout/Layout';

const NotFoundPage: React.FC = () => {
    return <Layout param="" user={null}>
        <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
            <h1 className="retina-text-dark">404</h1>
            <h5 className="retina-text-dark">Couldn't find what you were looking for</h5>
        </div>
    </Layout>;
}
export default NotFoundPage;