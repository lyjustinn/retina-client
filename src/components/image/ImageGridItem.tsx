import React from 'react';
import './ImageGridStyles.css'

interface ImageGridItemProps {
    src : string
}

const ImageGridItem: React.FC<ImageGridItemProps> = ({src}) => {
    return (<img className="w-100 h-25 test" src={src}></img>);
}
export default ImageGridItem;