import React, { useEffect, useState } from 'react';
import Layout from '../../../components/layout/Layout';
import { Tag } from '../../../types/tagTypes';
import { getRandomTags } from '../../../util/tag/tagService';

interface ExplorePageProps {

}

const ExplorePage: React.FC<ExplorePageProps> = ({}) => {
    const [tags, setTags] = useState<Array<Tag>>([]);

    useEffect(()=> {
        getRandomTags()
        .then( res => setTags(res))
        .catch( e => console.error(e));
    },[])


    return <Layout param="" user={null}>
        <>
        <div>this is the explore page</div>
        <div>{tags.length}</div>
        </>
    </Layout>;
}
export default ExplorePage;