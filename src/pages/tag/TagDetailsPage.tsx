import React from 'react';
import { match, Redirect, RouteComponentProps } from 'react-router';
import Layout from '../../components/layout/Layout';
import TagDetails from '../../components/tag/TagDetails';

interface MatchParams {
    id : string
} 

interface TagDetailsPageProps extends RouteComponentProps<MatchParams>{
    match : match<MatchParams>
}

const TagDetailsPage: React.FC<TagDetailsPageProps> = ({match}) => {
    
    return <Layout param="" user={null}>
        {
            isNaN(+match.params.id) ? <Redirect to="/404" /> : <TagDetails id={+match.params.id}/>
        }
    </Layout>;
}
export default TagDetailsPage;