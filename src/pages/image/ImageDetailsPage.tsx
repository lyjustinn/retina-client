import React from 'react';
import { match, Redirect, RouteComponentProps } from 'react-router';
import ImageDetails from '../../components/image/ImageDetails';
import Layout from '../../components/layout/Layout';

interface MatchParams {
    id: string
}

interface ImageDetailsPageProps extends RouteComponentProps<MatchParams>{
    match: match<MatchParams>
}

const ImageDetailsPage: React.FC<ImageDetailsPageProps> = ({match}) => {

    
    return (<Layout param={match.params.id} user={null}>
        {
            isNaN(+match.params.id) ? <Redirect to="/404" /> : <ImageDetails id={+match.params.id}/>
        }
    </Layout>);
}
export default ImageDetailsPage;