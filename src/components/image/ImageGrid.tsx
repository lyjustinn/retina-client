import React from 'react';
import { Image } from '../../types/imageTypes';

interface ImageGridProps {
    GridItem : React.FC<{
        src : string,
        id : string,
        image : Image
    }>,
    num : number,
    images : Array<Image>
}

const ImageGrid: React.FC<ImageGridProps> = ({GridItem, num, images}) => {

    const getColumnStyles = () => ({
        width : `calc(${1/num * 100}% - 4px)`,
        marginTop: "4px" 
    });

    const renderColumns = () => {
        let columns : Array<Array<JSX.Element>> = [];

        const cdn : string = process.env.REACT_APP_CDN_URL ?? "";

        for(let i = 0; i < num; i++) columns.push([]);

        images.forEach((image, i ) => {
            columns[Math.floor(i%num)].push(
                <GridItem key={image.id} id={image.id+""} src={`${cdn}/${image.resourceName}`} image={image}/>
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

    return <div className="d-flex flex-wrap position-relative justify-content-between">
        {renderColumns()}
    </div>;
}
export default ImageGrid;