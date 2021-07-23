import React from 'react';
import { match, RouteComponentProps } from 'react-router';
import ImageDetails from '../../../components/image/imageDetails/ImageDetails';
import Layout from '../../../components/layout/Layout';

interface MatchParams {
    id: string
}

interface ImageDetailsPageProps extends RouteComponentProps<MatchParams>{
    match: match<MatchParams>
}

const ImageDetailsPage: React.FC<ImageDetailsPageProps> = ({match}) => {
    console.log(match)

    // should check of NaN later on
    return (<Layout param={match.params.id} user={null}>
        <>
            <div>{match.params.id}</div>
            <ImageDetails id={+match.params.id}/>
        </>
    </Layout>);
}
export default ImageDetailsPage;