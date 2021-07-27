import React from 'react';
import { Image } from '../../types/imageTypes';

interface ImageGridProps {
    GridItem : React.FC<{
        src : string
    }>,
    num : number,
    images : Array<Image>
}

const ImageGrid: React.FC<ImageGridProps> = ({GridItem, num, images}) => {

    const getColumnStyles = () => ({
        maxWidth : `${1/num * 100}%` 
    });

    const getItemStyles = () => ({
        maxHeight : `${1/num * 100}%`,
        maxWidth : `${1/num * 100}%` 
    });

    const renderColumns = () => {
        let columns : Array<Array<JSX.Element>> = [];

        const cdn : string = process.env.REACT_APP_CDN_URL ?? "";

        for(let i = 0; i < num; i++) columns.push([]);

        images.forEach((image, i ) => {
            columns[Math.floor(i%num)].push(
                <div key={image.id}><GridItem src={`${cdn}/${image.resourceName}`}/></div>
            )
        })

        const columnStyles = getColumnStyles();

        let columnElements : Array<JSX.Element> = [];

        columns.forEach( (column, i) => {
            columnElements.push(<div key={"column-"+i}className="column" style={columnStyles}>
                {column}
            </div>)
        })

        return columnElements
    }

    return <div className="d-flex flex-wrap position-relative">
        {renderColumns()}
    </div>;
}
export default ImageGrid;