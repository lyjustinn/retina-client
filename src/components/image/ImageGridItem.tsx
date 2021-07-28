import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../types/imageTypes';
import './ImageGridStyles.css'

interface ImageGridItemProps {
    src : string,
    id : string,
    image : Image
}

const ImageGridItem: React.FC<ImageGridItemProps> = ({src, id, image}) => {

    return (<div key={id} className="position-relative test">
        <img className="w-100 h-25" alt={"retina-image-"+id} src={src}></img>
        <div className={`image-grid-item-bar d-flex retina-text-light align-items-end p-3`}>
            <div className="d-flex justify-content-between align-items-center w-100">
                <div>
                    <h6 className="m-0"><strong>{image.name}</strong></h6>
                    <p className="m-0">By {image.owner.name}</p>
                </div>
                <Link className="retina-btn-icon" to={`/image/${id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#EBF5EE" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                </Link>
            </div>
        </div>
    </div>);
}
export default ImageGridItem;