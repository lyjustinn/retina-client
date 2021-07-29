import React from 'react';
import { TagSimplified } from '../../types/tagTypes';
import Chip from '@material-ui/core/Chip';

import '../../styles/tagContainerStyles.css';
import { Link } from 'react-router-dom';

interface TagContainerProps {
    tags : Array<TagSimplified>
    className : string
}

const TagContainer: React.FC<TagContainerProps> = ({tags, className}) => {


    return <div className={className + " d-flex flex-wrap tag-container"}>
        {tags.map( tag => 
        <Link to={"/tag/"+tag.id}>
            <Chip 
            clickable
            label={tag.name}
            className="m-1"
            color="primary"
        /></Link>)}
    </div>;
}
export default TagContainer;