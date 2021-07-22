import React from 'react';
import ImageUpload from '../../components/image/ImageUpload';
import Layout from '../../components/layout/Layout';

interface ImageUploadPageProps {

}

const ImageUploadPage: React.FC<ImageUploadPageProps> = ({}) => {
    return (
        <Layout user={null} param="">
            <ImageUpload/>
        </Layout>
    );
}
export default ImageUploadPage;