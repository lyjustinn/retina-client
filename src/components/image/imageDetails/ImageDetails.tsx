import React, { useEffect, useState } from 'react';
import { Image } from '../../../types/imageTypes';
import { getImage } from '../../../util/image/imageService';

interface ImageDetailsProps {
    id : number
}

const ImageDetails: React.FC<ImageDetailsProps> = ({id}) => {
    const [image, setImage] = useState<Image | null>(null);

    useEffect(() => {
        getImage(id)
            .then( res => {
                setImage(res)
            }).catch( e => console.error(e));
    },[id])

    if (image) {
        return (
            <div>
                <h6>{image.name}</h6>    
                <p>{image.description}</p>
            </div>);
    } else {
        return <div>Loading</div>
    }
}
export default ImageDetails;