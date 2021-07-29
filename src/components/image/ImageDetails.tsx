import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Image } from '../../types/imageTypes';
import { getImage } from '../../util/image/imageService';
import TagContainer from '../tag/TagContainer';
import '../../styles/imageDetailsStyles.css';

interface ImageDetailsProps {
    id : number
}

const ImageDetails: React.FC<ImageDetailsProps> = ({id}) => {
    const [image, setImage] = useState<Image | null>(null);

    useEffect(() => {
        getImage(id)
        .then( res => setImage(res))
        .catch( e => console.error(e));
    },[id])

    return (
        <div>
            <div className="retina-bg-dark-gray d-flex justify-content-center p-4">
                {
                    image ? 
                    <img className="image-detail-img" alt={"retina-image-"+image.id} src={`${process.env.REACT_APP_CDN_URL ?? ""}/${image.resourceName}`}></img>
                    : <div>skeleton</div>
                }
            </div>
            <Container className="py-4">
                {
                    image ? 
                    <div className="retina-text-dark d-flex">
                        <div className="w-60">
                            <h3 className="retina-text-title my-1">{image.name}</h3>
                            <h5 className="my-1">By {image.owner.name}</h5>
                            <p className="my-1">{image.description}</p>
                        </div>
                        <div className="w-40">
                            <div className="d-flex justify-content-end align-items-center my-1">
                                <h5 className="m-0 retina-text-dark-blue">Download</h5>
                                <a className="ms-2" href={`${process.env.REACT_APP_CDN_URL ?? ""}/${image.resourceName}`} download>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3454D1" className="bi bi-download" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="my-1">
                                <h5>Related Tags</h5>
                                <TagContainer tags={image.tags} className="w-100"/>
                            </div>
                        </div>
                    </div>
                    : <div>skeleton</div>
                }
            </Container>
        </div>
    )
}
export default ImageDetails;