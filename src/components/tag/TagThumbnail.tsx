import React, { useState, useEffect } from 'react';
import { Image } from '../../types/imageTypes';
import { Tag } from '../../types/tagTypes';
import '../../styles/tagThumbnailStyles.css';
import { Link } from 'react-router-dom';

interface TagThumbnailProps {
    tag : Tag
}

const TagThumbnail: React.FC<TagThumbnailProps> = ({tag}) => {
    const [images, setImages] = useState<Array<Image>>([]);


    const getRand = () : Array<Image> => {
        if (tag.images.length < 4) return [...tag.images];

        let res = []
        let taken: { [key : string] : number} = {}
        let n = 0
        while (n < 4) {
            let x = Math.floor(Math.random() * tag.images.length); 
            if (!(tag.images[x].id+"" in taken)) {
                taken[tag.images[x].id+""] = 1
                n++;
                res.push(tag.images[x])
            } 
        }

        return res;
    }

    useEffect(() => {
        let temp = getRand();
        console.log(tag);

        setImages(temp);

    },[tag.id, tag.images.length])

    return (<div className="tag-thumbnail my-4 p-2">
        <Link to={"/tag/"+tag.id} className="tag-link">
            { images.length > 0 ? <img className="main-thumbnail" alt={`image for id :${images[0].id}`} src={`${process.env.REACT_APP_CDN_URL ?? ""}/${images[0].resourceName}`}></img> 
            : <div>loading</div>}
            <div className="secondary-row d-flex justify-content-start">
                { images.slice(1).map( (image, i) => {
                    return <img key={"tag-"+tag.name+"-"+image.id} className="secondary-thumbnail" src={`${process.env.REACT_APP_CDN_URL ?? ""}/${image.resourceName}`} alt={`image for id :${image.id}`}></img>
                })}
            </div>
            <div className="d-flex justify-content-between third-row px-3 pt-2 retina-text-dark">
                <h5 className="retina-text-title m-0 tag-anchor">{tag.name}</h5>
                <div className="d-flex align-items-center retina-text-light-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#7C90A0" className="bi bi-image mx-2" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                    </svg>
                    <span className="retina-text-light-gray m-0 tag-anchor">{tag.images.length}</span>
                </div>
            </div>
        </Link>
    </div>);
}
export default TagThumbnail;