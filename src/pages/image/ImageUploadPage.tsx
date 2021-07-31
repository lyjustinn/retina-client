import React from 'react';
import ImageUpload from '../../components/image/ImageUpload';
import Layout from '../../components/layout/Layout';

const ImageUploadPage: React.FC = () => {
    return (
        <Layout user={null} param="">
            <ImageUpload/>
        </Layout>
    );
}
export default ImageUploadPage;