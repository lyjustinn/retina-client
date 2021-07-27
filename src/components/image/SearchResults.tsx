import React, { useEffect, useState } from 'react';
import { Image } from '../../types/imageTypes';
import { searchImages } from '../../util/image/imageService';
import Container from 'react-bootstrap/Container';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageGrid from './ImageGrid';
import ImageGridItem from './ImageGridItem';

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

    return (<Container className="p-4 retina-text-dark">
        <div>
            <h3>Search Results</h3>
            <div className="d-flex align-items-center my-4">
                <h5 className="retina-text-dark-blue retina-text-title m-0">Results for "{query}" :</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#7C90A0" className="bi bi-image mx-2" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                </svg>
                <p className="retina-text-light-gray m-0">{images.length} Images</p>
            </div>
        </div>
        <div>
            <ImageGrid GridItem={ImageGridItem} num={3} images={images}/>
        </div>
    </Container>);
}
export default SearchResults;