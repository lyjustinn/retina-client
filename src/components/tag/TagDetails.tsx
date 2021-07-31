import React, {useEffect, useState} from 'react';
import { Tag } from '../../types/tagTypes';
import { getTag } from '../../util/tag/tagService';
import Container from 'react-bootstrap/Container';
import ImageGrid from '../image/ImageGrid';
import ImageGridItem from '../image/ImageGridItem';

interface TagDetailsProps {
    id : number
}

const TagDetails: React.FC<TagDetailsProps> = ({id}) => {
    const [tag, setTag] = useState<Tag | null>(null);

    useEffect(() => {
        getTag(id)
        .then( res => setTag(res))
        .catch( e => console.error(e));
    },[id])

    return (
    <Container className="p-4 retina-text-dark">
        {
            tag ? 
            <div>
                <h3 className="retina-text-dark retina-text-title m-0">{tag.name}</h3>
                <div className="d-flex align-items-center my-4">
                    <h5 className="retina-text-dark-blue retina-text-title m-0">Images related to the tag "{tag.name}" :</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#7C90A0" className="bi bi-image mx-2" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                    </svg>
                    <p className="retina-text-light-gray m-0">{tag.images.length} Images</p>
                </div>
            </div> : <div>loading</div>
        }
        <div>
            { tag ? <ImageGrid GridItem={ImageGridItem} num={4} images={tag.images}/> : <div>loading</div>}
        </div>
    </Container>);
}
export default TagDetails;