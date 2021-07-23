import React, { useEffect, useState } from 'react';
import { Image } from '../../../types/imageTypes';
import { searchImages } from '../../../util/image/imageService';

interface SearchResultsProps {
    query : string
}

const SearchResults: React.FC<SearchResultsProps> = ({query}) => {
    const [images, setImages] = useState<Array<Image>>([]);

    useEffect(() => {
        searchImages(query)
            .then( res => setImages(res))
            .catch( e => console.error(e))
    },[query])

    return (<div>
        <h6>Search Results</h6>
        <p>{query}</p>
        <p>{images.length}</p>
    </div>);
}
export default SearchResults;