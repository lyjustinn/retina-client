import React from 'react';
import PhotoUpload from '../../components/image/ImageUpload';
import Layout from '../../components/layout/Layout';

interface ImageUploadPageProps {

}

const ImageUploadPage: React.FC<ImageUploadPageProps> = ({}) => {
    return (
        <Layout user={null} param="">
            <PhotoUpload/>
        </Layout>
    );
}
export default ImageUploadPage;