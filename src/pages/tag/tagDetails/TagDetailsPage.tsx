import React, { useEffect, useState } from 'react';
import { match, RouteComponentProps } from 'react-router';
import Layout from '../../../components/layout/Layout';
import { Tag } from '../../../types/tagTypes';
import { getTag } from '../../../util/tag/tagService';

interface MatchParams {
    id : string
} 

interface TagDetailsPageProps extends RouteComponentProps<MatchParams>{
    match : match<MatchParams>
}

const TagDetailsPage: React.FC<TagDetailsPageProps> = ({match}) => {
    const [tag, setTag] = useState<Tag | null>(null); 

    useEffect(() => {
        getTag(+match.params.id)
        .then( res => setTag(res))
        .catch( e => console.error(e));
    },[])
    
    return <Layout param="" user={null}>
        <>
        <div>tag details</div>
        <div>{tag?.name}</div>
        </>
    </Layout>;
}
export default TagDetailsPage;