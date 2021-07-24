import React, { useState, useEffect } from 'react';
import { match, RouteComponentProps } from 'react-router';
import ImageEditForm from '../../../components/image/imageEdit/ImageEditForm';
import Layout from '../../../components/layout/Layout';
import { Image } from '../../../types/imageTypes';
import { getImage } from '../../../util/image/imageService';
import { getCurrentUser } from '../../../util/user/userService';

interface MatchParam {
    id : string
}

interface ImageEditPageProps extends RouteComponentProps<MatchParam>{
    match : match<MatchParam>
}

const ImageEditPage: React.FC<ImageEditPageProps> = ({match}) => {
    const [image, setImage] = useState<Image | null>(null);

    useEffect(() => {
        async function check() {
            const image = await getImage(+match.params.id);
            const user = await getCurrentUser();

            if (user.id !== image.owner.id) throw new Error("not valid");
            else setImage(image);
        }  

        check();
    },[])

    return <Layout param="" user={null}>
        { image ? <ImageEditForm image={image}/> : <>uh oh</>}
    </Layout>;
}
export default ImageEditPage;