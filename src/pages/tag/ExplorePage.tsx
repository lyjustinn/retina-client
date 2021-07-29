import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Tag } from '../../types/tagTypes';
import { getRandomTags } from '../../util/tag/tagService';
import Container from 'react-bootstrap/Container';
import TagThumbnail from '../../components/tag/TagThumbnail';

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
        <Container className="p-4">
            <h3>Featured Tags</h3>
            <div className="d-flex flex-wrap justify-content-between">{tags.map(tag => <TagThumbnail key={"tag-"+tag.name} tag={tag}/>)}</div>
        </Container>
    </Layout>;
}
export default ExplorePage;