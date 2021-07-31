import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../types/imageTypes';
import '../../styles/ImageGridStyles.css'

interface ImageGridItemProps {
    src : string,
    id : string,
    image : Image,
    edit? : boolean
}

const ImageGridItem: React.FC<ImageGridItemProps> = ({src, id, image, edit}) => {

    return (<div key={id} className="position-relative test">
        <img className="w-100 h-25" alt={"retina-image-"+id} src={src}></img>
        <div className={`image-grid-item-bar d-flex retina-text-light align-items-end p-3`}>
            <div className="d-flex justify-content-between align-items-center w-100">
                <div>
                    <h6 className="m-0"><strong>{image.name}</strong></h6>
                    <p className="m-0">By {image.owner.name}</p>
                </div>
                <Link className="retina-btn-icon" to={edit ? `/edit/image/${id}` : `/image/${id}`}>
                    { edit ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#EBF5EE" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                        </svg>
                        :<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#EBF5EE" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                        </svg>
                    }
                </Link>
            </div>
        </div>
    </div>);
}
export default ImageGridItem;